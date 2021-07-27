import React from 'react';
import { MdMenu, MdSearch, MdAccountCircle } from 'react-icons/md';
import wizelineAcademyLogo from '../../img/academy-color-transparent-283x300.png';
import Toggle from '../ToggleButton/ToggleButton.component';

import {
  Nav,
  NavIcon,
  NavLeft,
  NavCenter,
  StyledInput,
  SearchButton,
  SearchForm,
  NavRight,
  Avatar,
  AvatarButton,
} from './Navbar.styles';

function Navbar() {
  const [IsChecked, setIsChecked] = React.useState(false);
  const iconStyles = { fontSize: '30px' };

  return (
    <>
      <Nav>
        <NavLeft>
          <NavIcon>
            <MdMenu style={iconStyles} />
          </NavIcon>
          <NavIcon>
            <img to="/" src={wizelineAcademyLogo} alt="Wizeline Academy logo" />
          </NavIcon>
        </NavLeft>
        <NavCenter>
          <SearchForm>
            <StyledInput type="text" placeholder="Search" />
            <SearchButton type="submit">
              <MdSearch style={iconStyles} />
            </SearchButton>
          </SearchForm>
        </NavCenter>
        <NavRight>
          <Toggle text="Mode" checked={IsChecked} setChecked={setIsChecked} />
          <Avatar>
            <AvatarButton>
              <MdAccountCircle style={iconStyles} />
            </AvatarButton>
          </Avatar>
        </NavRight>
      </Nav>
    </>
  );
}
export default Navbar;
