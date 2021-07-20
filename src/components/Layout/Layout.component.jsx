import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
