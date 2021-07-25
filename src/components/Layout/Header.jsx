import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Buscar from './Buscar';
import Navegacion from './Navegacion';

const Nav = styled.nav`
  background-color: #8ec045;
`;

const Header = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-uppercase">
          YouTube client app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <Navegacion />
          <span className="navbar-text">
            <Buscar />
          </span>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
