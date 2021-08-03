import React from 'react';
import './Home.styles.css';
import styled from 'styled-components';
import { YoutubeData } from '../../data/youtube-mock-data';

import VideoList from '../../components/VideoList/VideoList.component';

const SectionContainer = styled.section`
  width: 95%;
  margin: auto;
`;
SectionContainer.displayName = 'SectionContainer';
const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;

  @media only screen and (max-width: 870px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 670px) {
    display: flex;
    justify-content: center;
  }
`;

VideoListContainer.displayName = 'VideoListContainer';

function HomePage() {
  return (
    <SectionContainer className="homepage-container">
      <div className="homepage__title">
        <h2 style={{ marginLeft: '4rem', marginTop: '2rem' }}>Our videos:</h2>
      </div>
      <VideoListContainer className="homepage__video">
        {YoutubeData.items.map((video) => (
          <VideoList key={video.id.videoId} video={video.snippet} />
        ))}
      </VideoListContainer>
    </SectionContainer>
  );
}

export default HomePage;
