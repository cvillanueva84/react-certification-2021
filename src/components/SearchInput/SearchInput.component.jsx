import React from 'react';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from './SearchInput.styled';

const SearchInput = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('estoy buscando...');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FontAwesomeIcon
        color="blue"
        icon={faSearch}
        style={{ position: 'relative', zIndex: '1', top: '8px', left: '30px' }}
      />
      <input id="searchInput" type="text" placeholder="Search..." />
    </Form>
  );
};

export default SearchInput;
