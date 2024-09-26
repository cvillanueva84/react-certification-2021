import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

import ProfileMenu from '../ProfileMenu';
import { HeaderElement } from './Header.modules';

import './Header.styles.css';

function Header(props) {
  const { setIsSideMenuActive, handleSubmit } = props;
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(null);
  const [searchText, setSearchText] = useState('');

  return (
    <AppBar position="sticky">
      <Toolbar className="header-container">
        <HeaderElement className="header-icon">
          <HeaderElement>
            <span
              aria-hidden="true"
              onClick={() => setIsSideMenuActive(true)}
              onKeyDown={() => setIsSideMenuActive(true)}
            >
              <MenuIcon />
            </span>
          </HeaderElement>
          <HeaderElement>
            <Link to="/">
              <HomeIcon />
            </Link>
          </HeaderElement>
        </HeaderElement>
        <HeaderElement className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="button" onClick={() => handleSubmit(searchText)}>
            <SearchIcon />
          </button>
        </HeaderElement>
        <HeaderElement>
          <HeaderElement className="header-icon">
            <span
              aria-hidden="true"
              onClick={(e) => setIsProfileMenuActive(e.currentTarget)}
              onKeyDown={(e) => setIsProfileMenuActive(e.currentTarget)}
            >
              <AccountCircleIcon />
            </span>
          </HeaderElement>
          <ProfileMenu
            isProfileMenuActive={isProfileMenuActive}
            closeMenu={setIsProfileMenuActive}
          />
        </HeaderElement>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
