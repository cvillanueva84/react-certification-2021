import React from 'react';
import styled from 'styled-components';

import VideoPlayer from '../../components/VideoPlayer';

const Container = styled.div`
  width: 100%;
  max-width: 55rem;
  padding: 1rem;
  
  @media(max-width: 629px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 0.8rem;
`;

function VideoMain(props) {

  const title = props.video.snippet.title;
  const id = props.video.id;
  const description = props.video.snippet.description;

  return (
    <Container>
      <VideoPlayer id={id} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default VideoMain;
