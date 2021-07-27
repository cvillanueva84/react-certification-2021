import React from 'react';
import './Home.styles.js';
import AllVideos from '../../components/AllVideos'

import {
  StyledHome,
} from './Home.styles';

function HomePage() {

  return (
    <StyledHome data-testid="home-page">
      <AllVideos />
    </StyledHome>
  );
}

export default HomePage;
