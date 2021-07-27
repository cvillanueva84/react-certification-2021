import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Wrapper, Icon, Input } from './SearchInput.styles';

function SearchInput() {
  return (
    <Wrapper>
      <Icon>
        <MdSearch />
      </Icon>
      <Input placeholder="Search" />
    </Wrapper>
  );
}

export default SearchInput;
