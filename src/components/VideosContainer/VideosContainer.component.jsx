import React from 'react';
import VideoCard from '../VideoCard';
import { Container } from './VideosContainerStyled';

const VideosContainer = ({ data }) => {
  return (
    <Container>
      {data.items.length > 0 &&
        data.items.map((video) => {
          return <VideoCard key={video.snippet.thumbnails.default.url} {...video} />;
        })}
    </Container>
  );
};

export default VideosContainer;
