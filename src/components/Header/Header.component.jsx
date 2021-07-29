import React from 'react';

import {
  HeaderContainer,
  BurgerMenuContainer,
  BurgerMenu,
  LeftHeaderContainer,
} from './Header.styled.component';
import SearchBox from '../SearchBox';
import UserSettings from '../UserSettings';

function Header() {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <BurgerMenuContainer>
          <BurgerMenu color="white" />
        </BurgerMenuContainer>
        <SearchBox minWidth="600px" />
      </LeftHeaderContainer>
      <UserSettings minWidth="960px" />
    </HeaderContainer>
  );
}

export default Header;
