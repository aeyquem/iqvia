import {
  InputGroup,
  InputLeftAddon as InputLeftElement,
  FormLabel,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = (props) => {
  const { value, onChange } = props;

  return (
    <InputGroup maxW='200px'>
      <InputLeftElement>
        <FormLabel htmlFor='filterState'>State:</FormLabel>
      </InputLeftElement>
      <Input name='fliterState' value={value} onChange={onChange}></Input>
      <InputRightElement>
        <SearchIcon color='gray.300' />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
