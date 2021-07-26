import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  background-color: #ffffff17;
  color: white;
  cursor: text;
  display: flex;
  height: 35px;
  border-radius: 5px;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  height: 100%;
  width: 234px;
`;

const Icon = styled(AiOutlineSearch)`
  color: white;
  font-size: 1.5rem;
  margin-left: 10px;
  margin-right: 10px;
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <Icon />
      <Input type="text" name="search" />
    </SearchBarContainer>
  );
}

export default SearchBar;
