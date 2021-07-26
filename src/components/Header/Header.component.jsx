import React from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import ToggleButton from '../ToggleButton/ToggleButton.component';

const HeaderWrapper = styled.div`
  background-color: transparent;
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
`;

const FlexCentered = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 400px;
  border: 1px solid #8e8e8e;
  height: 41px;
`;

const Button = styled.button`
  padding: 10px;
  background: none;
  border: 1px solid #8e8e8e;
  width: 70px;
  background-color: #8e8e8e;
  height: 41px;
`;

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
