import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Content from '../../components/Content';

const Homepage = styled.section`
  width: 100%;
  text-align: center;
  justify-content: center;
  &:h2 {
    font-size: 3.75rem;
    font-weight: 300px;
    line-height: 1.2;
    font-family: 'Roboto', 'Helvetica';
  }
`;

function HomePage() {
  return (
    <Homepage>
      <Header />
      <h2>Welcome to the Challenge!</h2>
      <Content />
    </Homepage>
  );
}

export default HomePage;
