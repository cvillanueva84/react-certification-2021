import React from 'react';
import Card from '../Card';
import { Container } from './Content.styled';

function Content({ data }) {
  return (
    <Container>
      {data.map((video) => (
        <Card
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          videoId={video.id.videoId}
          key={video.id.videoId}
        />
      ))}
    </Container>
  );
}

export default Content;
