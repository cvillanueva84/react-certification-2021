import React from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { Homepage } from './Home.styled';

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
