import {
  InputGroup,
  InputLeftAddon,
  FormLabel,
  Input,
  InputRightElement,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = (props) => {
  const { value, onChange } = props;

  return (
    <Flex
      sx={{
        position: 'sticky',
        top: '0',
      }}
      py='3'
      justify='center'
      w='500px'
      bg='white'
      borderBottom='1px solid black'
    >
      <InputGroup maxW='200px'>
        <InputLeftAddon>
          <FormLabel htmlFor='filterState'>State:</FormLabel>
        </InputLeftAddon>
        <Input
          bg='white'
          name='fliterState'
          value={value}
          onChange={onChange}
        ></Input>
        <InputRightElement>
          <SearchIcon color='gray.300' />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
