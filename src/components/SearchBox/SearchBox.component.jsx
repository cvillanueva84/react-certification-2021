import React from 'react';
import {
  SearchBoxContainer,
  SearchInput,
  SearchIcon,
} from './SearchBox.styled.component';

function SearchBox(props) {
  return (
    <SearchBoxContainer minWidth={props.minWidth}>
      {/* Search Icon */}
      <SearchIcon />
      <SearchInput placeholder="Search..." />
    </SearchBoxContainer>
  );
}

export default SearchBox;
