import React from 'react';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SideMenuContainer, SideMenuItem } from './SideMenu.elements';

function SideMenu({ theme, setTheme }) {
  const icon = theme === 'light' ? FaMoon : FaSun;
  const text = theme === 'light' ? 'Dark Mode' : 'Light Mode';

  setTheme('light');

  return (
    <>
      <SideMenuContainer>
        <SideMenuItem Icon={AiFillHome} text="Home" />
        <SideMenuItem Icon={AiFillStar} text="Liked" />
        <SideMenuItem Icon={icon} text={text} />
      </SideMenuContainer>
    </>
  );
}

export default SideMenu;
