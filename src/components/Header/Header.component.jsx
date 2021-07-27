import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import ToggleButton from '../ToggleButton/ToggleButton.component';
import { HeaderWrapper, Input, Button, FlexCentered } from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <div>
        <GiHamburgerMenu />
      </div>
      <div>
        <Input placeholder="Search..." />
        <Button>
          <FiSearch />
        </Button>
      </div>
      <FlexCentered>
        <ToggleButton />
        <p>Dark Mode</p>
        <HiUserCircle
          style={{ fontSize: '30px', marginLeft: '10px', color: '#8e8e8e' }}
        />
      </FlexCentered>
    </HeaderWrapper>
  );
}

export default Header;
