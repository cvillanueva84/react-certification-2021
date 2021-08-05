import React from 'react';
import FilterVideo from '../Filter';
import ToggleButton from '../ToggleButton';
import { Nav, NavIcon, Menu, MenuItem, MenuLink, MenuItemRight } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <MenuLink>
            <span>
              <NavIcon />
            </span>
            <FilterVideo />
          </MenuLink>
        </MenuItem>
        <MenuItemRight>
          <MenuLink>
            <ToggleButton />
          </MenuLink>
        </MenuItemRight>
      </Menu>
    </Nav>
  );
};

export default Navbar;
