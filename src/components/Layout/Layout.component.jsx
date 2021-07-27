import React from 'react';
import Navbar from '../Navbar/Navbar.component';
import { Container } from '../../GlobalStyles';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}

export default Layout;
