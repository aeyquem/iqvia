import { DATA } from '@/data/data';
import CasesTable from '@/pages/cases/layout/CasesTable';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  InputGroup,
  InputLeftAddon as InputLeftElement,
  FormLabel,
  Input,
  InputRightAddon,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useQuery } from 'react-query';

const Cases = () => {
  const { data, isLoading, isError } = useQuery('cases', async () => {
    // const response = await axios.get(process.env.REACT_APP_API);
    // return response.data;
    return DATA;
  });

  if (isLoading) {
    return <Heading size='lg'>Loading...</Heading>;
  }

  if (isError) {
    return <Heading size='lg'>Error loading data</Heading>;
  }

  console.log(data);
  return (
    <>
      <InputGroup maxW='200px'>
        <InputLeftElement>
          <FormLabel htmlFor='filterState'>State:</FormLabel>
        </InputLeftElement>
        <Input name='fliterState'></Input>
        <InputRightElement children={<SearchIcon color='gray.300' />} />
      </InputGroup>

      <CasesTable data={data} />
    </>
  );
};

export default Cases;
