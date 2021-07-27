import React from 'react';
import './Header.style.css';
import { MDBSwitch } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-left">
          <button type="submit">Home</button>
          <input type="text" placeholder="Filtrar..." />
        </div>
        <div className="navbar-right">
          <MDBSwitch id="flexSwitchCheckDefault" label="Dark Mode" />
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
