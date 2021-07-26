import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileMenu from '../ProfileMenu';
import SideMenu from '../SideMenu/SideMenu.component';
import { MenuIcon, SearchIcon, ProfileIcon } from '../../utils/icons';

import '../../utils/styles/generalStyles.css';
import './Header.styles.css';

const HeaderContainer = styled.header`
  background-color: #3234b8;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 1px 8px 1px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 1px 1px 8px 1px rgba(0, 0, 0, 0);
  color: white;
  height: 3.5em;
  padding: 0 1em;
`;

const HeaderElement = styled.div`
  height: 2em;
  margin: 0 10px;
`;

function Header() {
  const iconColor = 'white';
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);

  return (
    <HeaderContainer className="row">
      <HeaderElement
        className="header-icon item-1"
        onClick={() => setIsSideMenuActive(!isSideMenuActive)}
      >
        <span>
          <MenuIcon color={iconColor} />
        </span>
        <SideMenu className={isSideMenuActive ? 'active' : ''} />
      </HeaderElement>
      <HeaderElement className="search-bar item-8">
        <input type="text" placeholder="Search" />
        <button type="button">
          <SearchIcon color={iconColor} />
        </button>
      </HeaderElement>
      <HeaderElement className="item-3 right">
        <HeaderElement onClick={() => setIsProfileMenuActive(!isProfileMenuActive)}>
          <div className="input-icon">
            <ProfileIcon color={iconColor} />
          </div>
        </HeaderElement>
        <ProfileMenu className={isProfileMenuActive ? 'active' : ''} />
      </HeaderElement>
    </HeaderContainer>
  );
}

export default Header;
