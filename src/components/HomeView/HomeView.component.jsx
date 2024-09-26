import React from 'react';
import { HomeViewContainer } from './HomeView.modules';

import VideoCard from '../VideoCard';

function HomeView(props) {
  const { youtubeData } = props;
  const videos =
    youtubeData !== undefined && 'items' in youtubeData ? youtubeData.items : [];

  return (
    <HomeViewContainer className="home-view-container">
      {videos
        .filter((videoInfo) => videoInfo.id.kind.includes('video'))
        .map((videoInfo) => {
          return (
            <VideoCard
              title={videoInfo.snippet.title}
              thumbnail={videoInfo.snippet.thumbnails.medium.url}
              description={videoInfo.snippet.description}
              videoId={videoInfo.id.videoId}
              key={videoInfo.id.videoId}
            />
          );
        })}
    </HomeViewContainer>
  );
}

export default HomeView;
