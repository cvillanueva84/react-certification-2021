import React from 'react';
import styled from 'styled-components';

const AllDiv = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

function Layout({ children }) {
  return <AllDiv>{children}</AllDiv>;
}

export default Layout;
