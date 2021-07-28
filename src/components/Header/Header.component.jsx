import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Logo from '../Logo';
import SearchInput from '../SearchInput';
import ThemeSwitch from '../ThemeSwitch';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SearchInput placeholder="Buscar video" />
      <WrapperRight>
        <ThemeSwitch />
        <Avatar />
      </WrapperRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  background-color: #fff;
`;

const WrapperRight = styled.div`
  display: flex;

  * {
    margin-left: 0.5rem;
  }
`;
