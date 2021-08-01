import React from 'react';
import Card from '../Card';
import Data from './MockData';
import { Container } from './Content.styled';

function Content() {
  return (
    <Container>
      {Data.items.map((video) => (
        <Card
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          key={video.id.videoId}
        />
      ))}
    </Container>
  );
}

export default Content;
