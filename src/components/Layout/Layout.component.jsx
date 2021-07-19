import React from 'react';
import './Layout.styles.css';
import NavbarApp from '../Navbar/Navbar.component';

function Layout({ children }) {
  return (
    <>
      <NavbarApp />
      <div className="container">{children}</div>
    </>
  );
}

export default Layout;
