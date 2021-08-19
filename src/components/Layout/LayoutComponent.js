import React from 'react';

import './LayoutComponent.styles.css';

function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
