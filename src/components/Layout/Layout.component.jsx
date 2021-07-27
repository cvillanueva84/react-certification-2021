import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Main } from './Layout.style';

function Layout({ children }) {
  return (
    <Main>
      <Navbar />
      {children}
    </Main>
  );
}

export default Layout;
