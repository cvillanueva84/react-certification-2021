import React from 'react';
import { Nav, IconLogo, SearchBar, ProfileImg } from './Navbar.elements';

function Navbar() {
  return (
    <>
      <Nav>
        <IconLogo />
        <SearchBar />
        <ProfileImg src="https://bigosvaap.github.io/img/foca.webp" />
      </Nav>
    </>
  );
}

export default Navbar;
