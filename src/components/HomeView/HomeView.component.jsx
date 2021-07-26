import React from 'react';
import styled from 'styled-components';

import VideoCard from '../VideoCard';

import './HomeView.styles.css';

import youtubeJson from '../../utils/mock/youtube-videos-mock.json';

const HomeViewContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  height: calc(100vh - 3.5em);
  justify-content: center;
  overflow-x: hidden;
`;

function HomeView() {
  const youtubeVideos = 'items' in youtubeJson ? youtubeJson.items : [];

  return (
    <HomeViewContainer className="home-view-container">
      {youtubeVideos
        .filter((videoInfo) => videoInfo.id.kind.includes('video'))
        .map((videoInfo) => {
          return (
            <VideoCard
              title={videoInfo.snippet.title}
              thumbnail={videoInfo.snippet.thumbnails.medium.url}
              key={videoInfo.etag}
            />
          );
        })}
    </HomeViewContainer>
  );
}

export default HomeView;
