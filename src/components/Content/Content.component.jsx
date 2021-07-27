import React from 'react';
import styled from 'styled-components';

function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Content;

const Wrapper = styled.div`
  margin-top: 4rem;
  padding: 12px;
  flex-grow: 1;
  width: 100%;
`;
