import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHamburger, FaWindowClose, FaHome, FaUserNinja } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.styles.scss';
import styled from 'styled-components';

const Input = styled.input`
  background-color: #060b26;
  border: none;
  color: #fff;
  margin-left: 2rem;
  padding: 0.5rem;
  width: 60%;
  transition: all 0.3s ease;
  &::placeholder {
    color: #fff;
  }
  &:hover {
    width: 100%;
    border-bottom: 2px solid #fff;
  }
`;

// ##### Im thinking about refactoring this component into another component as I think it's kind of complex to read ####

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toogleSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '3rem' }}>
        <nav className="navbar">
          <div className="navbar__left-section">
            <Link to="/" className="menu-bars">
              <FaHamburger onClick={toogleSideBar} />
            </Link>
            <Input type="text" placeholder="search a video..." />
          </div>

          <div className="navbar__right-section">
            <div className="toggle">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <Link to="/">
              <FaUserNinja />
            </Link>
          </div>
        </nav>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={toogleSideBar}>
            <li className="navbar-toggle">
              <Link to="/" className="menu-bars">
                <FaWindowClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
