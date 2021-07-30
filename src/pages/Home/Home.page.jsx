// import React, { useRef } from 'react';
import React from 'react';
import { Navbar } from '../../components/Home/Navbar';
import { FullWidthContainer } from '../../__globalStyles';
import { VideoGrid } from '../../components/Home/VideoGrid';

function HomePage() {
  return (
    <>
      <FullWidthContainer>
        <Navbar />
        <VideoGrid />
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
