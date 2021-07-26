import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: 0 auto;
`;

function Content({ children }) {
  return <Container>{children}</Container>;
}

export default Content;
