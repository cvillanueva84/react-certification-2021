import React from 'react';
import styled from 'styled-components';

const Homepage = styled.section`
  text-align: center;

  &:h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;

function HomePage() {
  return (
    <Homepage>
      <h1>Hello stranger!</h1>
    </Homepage>
  );
}

export default HomePage;
