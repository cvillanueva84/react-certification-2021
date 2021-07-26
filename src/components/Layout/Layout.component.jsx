import React from 'react';
import Header from '../Header';

// import './Layout.styles.css';

function Layout({ children, themeToggler }) {
  return (
    <>
      <Header themeToggler={themeToggler} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
