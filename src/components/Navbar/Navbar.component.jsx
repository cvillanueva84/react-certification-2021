import React, { createRef } from 'react';
import { useHistory } from 'react-router';
import { Nav, IconLogo, SearchBar, ProfileImg } from './Navbar.elements';

function Navbar() {
  const history = useHistory();

  const inputRef = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/?q=${inputRef.current.value}`);
  };

  return (
    <>
      <Nav>
        <IconLogo />
        <SearchBar inputRef={inputRef} handleSubmit={handleSubmit} />
        <ProfileImg src="https://bigosvaap.github.io/img/foca.webp" />
      </Nav>
    </>
  );
}

export default Navbar;
