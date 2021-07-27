import React from 'react';

import Header from '../Header';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
