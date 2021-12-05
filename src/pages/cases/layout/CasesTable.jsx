import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const CasesTable = (props) => {
  const { data } = props;
  return (
    <Table variant='striped' colorScheme='green' size='lg'>
      <TableCaption>Covid confirmed cases per state</TableCaption>
      <Thead>
        <Tr>
          <Th>State</Th>
          <Th>Date</Th>
          <Th>Conf. cases</Th>
          <Th>% US</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.state}>
            <Td>{item.state}</Td>
            <Td>{item.submission_date}</Td>
            <Td>{item.conf_cases}</Td>
            <Td>{item.percent}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CasesTable;
