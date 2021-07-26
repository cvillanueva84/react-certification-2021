import React from 'react';
import styled from 'styled-components';

import './ProfileMenu.styles.css';

const MenuSeparator = styled.div`
  border: 1px solid #ffffff;
  margin: 20px;
  width: 90%;
`;

const MenuItem = styled.div`
  margin: 20px;
`;

function ProfileMenu(props) {
  const { className } = props;
  return (
    <div className={`profile-menu-container ${className}`}>
      <MenuItem className="row">
        <span>Dark theme</span>
        <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
        <label className="toggle">
          <input type="checkbox" />
          <span className="slider" />
        </label>
      </MenuItem>
      <MenuSeparator />
      <MenuItem>
        <span>Sign out</span>
      </MenuItem>
    </div>
  );
}

export default ProfileMenu;
