import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderContainer, HeaderColumn, MenuButton, BtnOnMenu } from './HeaderComponents';
import exportedUI from '../ui';

function Header() {
  const { SearchBar, ToggleButton } = exportedUI;

  return (
    <HeaderContainer>
      <HeaderColumn>
        <MenuButton>
          <GiHamburgerMenu />
        </MenuButton>
        <SearchBar />
      </HeaderColumn>
      <HeaderColumn>
        <ToggleButton />
        <BtnOnMenu>
          <img
            src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
            alt="wizeline"
          />
        </BtnOnMenu>
      </HeaderColumn>
    </HeaderContainer>
  );
}

export default Header;
