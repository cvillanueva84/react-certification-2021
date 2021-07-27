import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';

import videos from '../../mocks/videos';

function HomePage() {
  return (
    <VideosWrapper>
      {videos.items.map((video) => (
        <VideoCard
          key={video.etag}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          publishedAt={video.snippet.publishedAt}
        />
      ))}
    </VideosWrapper>
  );
}

export default HomePage;

const VideosWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
`;
