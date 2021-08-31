import React, { useContext } from 'react';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import ThemeContext from '../Context/ThemeContext';
import LinkVideo from '../Link.element';
import { SideMenuContainer, SideMenuItem } from './SideMenu.elements';

import { useAuth } from '../../providers/Auth';

const PrivateLink = () => {
  const { authenticated } = useAuth();

  return authenticated ? (
    <LinkVideo to="/favorites">
      <SideMenuItem Icon={AiFillStar} text="Liked" />
    </LinkVideo>
  ) : (
    <LinkVideo to="/login">
      <SideMenuItem Icon={AiFillStar} text="Liked" />
    </LinkVideo>
  );
};

function SideMenu() {
  const { theme, setTheme } = useContext(ThemeContext);

  const icon = theme === 'light' ? FaMoon : FaSun;
  const text = theme === 'light' ? 'Dark Mode' : 'Light Mode';

  const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <SideMenuContainer>
        <LinkVideo to="/">
          <SideMenuItem Icon={AiFillHome} text="Home" />
        </LinkVideo>
        <PrivateLink />
        <SideMenuItem Icon={icon} text={text} fun={handleTheme} />
      </SideMenuContainer>
    </>
  );
}

export default SideMenu;
