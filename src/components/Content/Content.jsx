import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Data from './MockData';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
`;
function Content() {
  return (
    <Container>
      {Data.items.map((video) => (
        <Card
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          key={video.id.videoId}
          data-testid="test-elements"
        />
      ))}
    </Container>
  );
}

export default Content;
