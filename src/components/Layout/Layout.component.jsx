import React from 'react';

import './Layout.styles.css';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {/* Content */}
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
