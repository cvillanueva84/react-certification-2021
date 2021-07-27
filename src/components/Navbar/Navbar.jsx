import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  Nav,
  Menu,
  Input,
  ContainerInput,
  InputCheck,
  Image,
  Menu2,
  ButtonMenu,
  NavMenu,
  NavItem,
  DivItem,
  SpanItem,
} from './Navbar.styled';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <Menu>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <DivItem>
                <SpanItem>Home</SpanItem>
              </DivItem>
            </NavItem>
          </NavMenu>
          <ButtonMenu onClick={handleClick}>
            <GiHamburgerMenu />
          </ButtonMenu>
          <ContainerInput>
            <BiSearchAlt2 style={{ marginRight: '8px' }} />
            <Input placeholder="Search..." />
          </ContainerInput>
        </Menu>
        <Menu2>
          <InputCheck type="checkbox" />
          <span>Dark mode</span>
          <Image>
            <img
              src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
              alt="Fotografia"
            />
          </Image>
        </Menu2>
      </Nav>
    </>
  );
};
export default Navbar;
