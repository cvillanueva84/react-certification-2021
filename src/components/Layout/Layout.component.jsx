import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
