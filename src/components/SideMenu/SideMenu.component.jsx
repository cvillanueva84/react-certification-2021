import React from 'react';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import LinkVideo from '../Link.element';
import { SideMenuContainer, SideMenuItem } from './SideMenu.elements';

function SideMenu({ theme, setTheme }) {
  const icon = theme === 'light' ? FaMoon : FaSun;
  const text = theme === 'light' ? 'Dark Mode' : 'Light Mode';

  const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <SideMenuContainer>
        <LinkVideo to="/">
          <SideMenuItem Icon={AiFillHome} text="Home" />
        </LinkVideo>
        <SideMenuItem Icon={AiFillStar} text="Liked" />
        <SideMenuItem Icon={icon} text={text} fun={handleTheme} />
      </SideMenuContainer>
    </>
  );
}

export default SideMenu;
