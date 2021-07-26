import React from 'react';
import styled from 'styled-components';

import './SideMenu.styles.css';

const MenuItem = styled.div`
  margin: 20px;
`;

function SideMenu(props) {
  const { className } = props;
  return (
    <div className={`side-menu-container ${className}`}>
      <MenuItem className="row">
        <span>This is the side menu :)</span>
      </MenuItem>
    </div>
  );
}

export default SideMenu;
