import React, { useRef } from 'react';
import './Home.styles.js';
import AllVideos from '../../components/AllVideos'

import {
  StyledHome,
} from './Home.styles';

function HomePage() {

  return (
    <StyledHome>
      <AllVideos />
    </StyledHome>
  );
}

export default HomePage;
