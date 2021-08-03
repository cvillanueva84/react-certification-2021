import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [IsChecked, setIsChecked] = useState(false);
  const history = useHistory();

  const handleSearch = (event) => {
    if (event.key === 'Enter' && event.target.value.lenght > 0) {
      history.push(`/search/${event.target.value}`);
    }
  };

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
            <SearchForm onSubmit={handleSearch}>
              <StyledInput type="text" placeholder="Search" onKeyDown={handleSearch} />
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
