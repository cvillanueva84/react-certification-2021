import React from 'react';
import Navbar from '../Navbar/Navbar.component';
import { Container } from '../../GlobalStyles';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
