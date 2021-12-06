import { useEffect } from 'react';
import CasesTable from '@/pages/cases/layout/CasesTable';
import { Heading, Spinner, Stack, Flex, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchInput from '@/pages/cases/layout/SearchInput';
import axios from 'axios';

const Cases = () => {
  const { data, isLoading, isError } = useQuery('cases', async () => {
    const dateUrl = `${process.env.REACT_APP_API}?&$select=max(submission_date)`;
    const dateResponse = (await axios.get(dateUrl)).data;

    const url = `${process.env.REACT_APP_API}?&$select=submission_date,case(conf_cases is null,0,conf_cases is not null, conf_cases) as conf_cases,state&$where=submission_date == ("${dateResponse[0].max_submission_date}")`;

    const data = (await axios.get(url)).data;

    let totalCases = data.reduce((acc, item) => {
      const cases = Number(item.conf_cases);
      return cases + acc;
    }, 0);
    totalCases = Math.round(totalCases);

    const finalData = data.map((item) => {
      return {
        percent: ((item.conf_cases / totalCases) * 100).toFixed(2),
        date: new Date(item.submission_date).toLocaleDateString('en-US'),
        state: item.state,
        cases: Math.round(item.conf_cases),
      };
    });

    return finalData;
  });

  const [state, setState] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!data) return;
    const filtered = data.filter((item) =>
      item.state.includes(state.toUpperCase())
    );
    setFilteredData(filtered);
  }, [state, data]);

  if (isLoading) {
    return (
      <Stack>
        <Flex justify='center' align='center' mt='25%'>
          <Spinner />
        </Flex>
      </Stack>
    );
  }

  if (isError) {
    return (
      <Heading size='lg' color='red.500'>
        Error loading data
      </Heading>
    );
  }

  const changeStateHandler = (event) => {
    setState(event.target.value);
  };

  return (
    <VStack m='5'>
      <SearchInput value={state} onChange={changeStateHandler} />
      <CasesTable data={filteredData} />
    </VStack>
  );
};

export default Cases;
