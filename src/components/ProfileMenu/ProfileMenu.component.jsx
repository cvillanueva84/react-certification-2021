import React from 'react';
import { Menu, MenuList, MenuItem } from '@material-ui/core';

import './ProfileMenu.styles.css';

function ProfileMenu(props) {
  const { isProfileMenuActive, closeMenu } = props;
  const isMenuOpen = Boolean(isProfileMenuActive);

  return (
    <Menu
      id="profile-menu"
      anchorEl={isProfileMenuActive}
      keepMounted
      open={isMenuOpen}
      onClose={() => closeMenu(null)}
    >
      <MenuList autoFocusItem={isMenuOpen}>
        <MenuItem>
          <span>Dark theme</span>
          <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label className="toggle-checkbox">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </MenuItem>
        <MenuItem>
          <span>Sign out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
