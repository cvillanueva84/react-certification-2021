import React from 'react';
import { IconContext } from 'react-icons';
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

  return (
    <>
      <IconContext.Provider value={{ color: 'white', size: '30px' }}>
        <Nav>
          <NavLeft>
            <NavIcon>
              <MdMenu />
            </NavIcon>
            <NavIcon>
              <img to="/" src={wizelineAcademyLogo} alt="Wizeline Academy logo" />
            </NavIcon>
          </NavLeft>
          <NavCenter>
            <SearchForm>
              <StyledInput type="text" placeholder="Search" />
              <SearchButton type="submit">
                <MdSearch />
              </SearchButton>
            </SearchForm>
          </NavCenter>
          <NavRight>
            <Toggle text="Mode" checked={IsChecked} setChecked={setIsChecked} />
            <Avatar>
              <AvatarButton>
                <MdAccountCircle />
              </AvatarButton>
            </Avatar>
          </NavRight>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
