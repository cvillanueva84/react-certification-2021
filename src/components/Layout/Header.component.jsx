import React from 'react';

import { faBars, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonToggle, HeaderWrapper, Input, LogoLink, MenuToggle } from './Header.styles';
// import InsideSessionLogo from '../../resources/logo.png'; // TODO: Uncomment when login is ready
import SessionOutLogo from '../../resources/session_out.png';

function HeaderComponent() {
  return (
    <HeaderWrapper>
      <Input type='text' placeholder="Wizleine" />
      <ButtonToggle>
        <FontAwesomeIcon icon={faToggleOff} size="6x" style={{ color: 'white'}} />
      </ButtonToggle>
      Dark Mode
      <LogoLink href="#">
        <img src={SessionOutLogo} alt="Logo" />
      </LogoLink>
      <MenuToggle href="#">
        <FontAwesomeIcon icon={faBars} size="6x" style={{ color: 'white'}} />
      </MenuToggle>
    </HeaderWrapper>
  );
}

export default HeaderComponent;
