import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import {
  SideMenuContainer,
  MenuItem,
  CloseIconContainer,
  CloseIconSpan,
  MenuSeparator,
} from './SideMenu.modules';

function SideMenu(props) {
  const { toggleSideMenu } = props;

  return (
    <SideMenuContainer>
      <CloseIconContainer onClick={() => toggleSideMenu(false)}>
        <CloseIconSpan>
          <CloseIcon />
        </CloseIconSpan>
      </CloseIconContainer>
      <MenuSeparator />
      <MenuItem>
        <span>This is the side menu :)</span>
      </MenuItem>
    </SideMenuContainer>
  );
}

export default SideMenu;
