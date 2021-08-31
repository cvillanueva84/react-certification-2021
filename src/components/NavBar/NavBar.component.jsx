import React, { useState } from 'react';
import Sidebar from '../Sidebar';

const NavBar = ({ setInputValue, inputValue }) => {
  const [sidebarState, setSidebarState] = useState(false);
  const handleInputChange = ({ target }) => {
    const value = target.value.trim();
    setInputValue(value || '');
  };
  return (
    <div className="navbar">
      <button
        type="button"
        className="burger-btn"
        onClick={() => setSidebarState(!sidebarState)}
      >
        <span />
        <span />
        <span />
      </button>
      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <div className="search-bar">
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      <div className="theme-toggle">
        <label htmlFor="theme-toggle-checkbox">
          <input id="theme-toggle-checkbox" type="checkbox" />
          Dark mode
        </label>
      </div>
      <div className="navbar-login-button">
        <span className="fas fa-user" />
      </div>
    </div>
  );
};

export default NavBar;
