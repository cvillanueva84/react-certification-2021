import React from 'react';

import { faBars, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonToggle, HeaderWrapper, Input, LogoLink, MenuToggle } from './Header.styles';
import SessionOutLogo from '../../resources/session_out.png';

function HeaderComponent() {
  return (
    <HeaderWrapper>
      <Input type='text' placeholder="Wizeline" />
      <ButtonToggle>
        <FontAwesomeIcon icon={faToggleOff} size="6x" style={{ color: 'white'}} title="toggle-button" />
      </ButtonToggle>
      Dark Mode
      <LogoLink href="#">
        <img src={SessionOutLogo} alt="Logo" />
      </LogoLink>
      <MenuToggle href="#">
        <FontAwesomeIcon icon={faBars} size="6x" style={{ color: 'white'}} title="menu-toggle" />
      </MenuToggle>
    </HeaderWrapper>
  );
}

export default HeaderComponent;
