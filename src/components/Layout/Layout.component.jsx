import React from 'react';
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
