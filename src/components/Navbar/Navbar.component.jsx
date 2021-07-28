import React from 'react';
import { Header } from '../App/App.styled';
import Hamburger from '../Hamburger';
import SearchIcon from '../SearchIcon';
import User from '../User';

const Navbar = () => {
  return (
    <Header>
      <div className="navbar">
        <Hamburger />
        <div className="navChild">
          <SearchIcon />
          <input placeholder="Search..." type="text" aria-label="search" />
        </div>
        <div className="spacer" />
        <div className="navChild navChild-right">
          {/* <span id="switch" type="text">
                            Switch
                            </span> */}
          <span>Dark Mode</span>
          <User />
        </div>
      </div>
    </Header>
  );
};

export { Navbar };
