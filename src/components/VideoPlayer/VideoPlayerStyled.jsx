import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  width: 70%;
  float: left;
`;

const EmbedVideo = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 65%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
`;

const VideoDescription = styled.p`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
`;

export { Container, EmbedVideo, VideoTitle, VideoDescription };
