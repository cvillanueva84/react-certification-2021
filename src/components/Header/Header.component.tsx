import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.02), 0 0.8px 5.3px rgba(0, 0, 0, 0.028),
    0 1.5px 10px rgba(0, 0, 0, 0.035), 0 2.7px 17.9px rgba(0, 0, 0, 0.042),
    0 5px 33.4px rgba(0, 0, 0, 0.05), 0 12px 80px rgba(0, 0, 0, 0.07);
  border-radius: 1rem 1rem 0 0;
  @media (max-width: 1068px) {
    border-radius: 0;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  border: none;
  color: palevioletred;
  font-size: 1.5rem;
  cursor: Pointer;
`;
const logo_img = require('../../img/youtube-logo.png');

const Logo = styled.div`
  background-image: url(${logo_img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.5rem;
  width: 8rem;
`;

function Header() {
  return (
    <Container>
      <Button>
        <HiMenuAlt1 />
      </Button>
      <Logo />
      <Button>
        <BiSearchAlt />
      </Button>
    </Container>
  );
}

export default Header;
