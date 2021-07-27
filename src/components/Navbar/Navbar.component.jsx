import React from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import ThemeButton from './ThemeButton';
import Profile from './Profile';

const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: #890C0C;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin: 0 1rem;
  padding: 0;
`;

function Navbar() {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <MenuButton />
          </Li>
          <Li>
            <SearchBar />
          </Li>
        </Ul>
        <Ul>
          <Li>
            <ThemeButton />
          </Li>
          <Li>
            <Profile />
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export default Navbar;
