import React from 'react';

import styled from 'styled-components';

import Videos from '../../components/Videos';

import './Home.styles.css';

const H1 = styled.h1`
  padding-top: 3rem;
  text-align: center;
`;

function HomePage() {
  return (
    <>
      <H1>Welcome to the Challenge!</H1>
      <Videos />
    </>
  );
}

export default HomePage;
