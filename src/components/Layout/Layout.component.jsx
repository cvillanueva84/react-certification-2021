import React from 'react';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div>
      {' '}
      <Header></Header>
      <main className="container">{children}</main>{' '}
    </div>
  );
}

export default Layout;
