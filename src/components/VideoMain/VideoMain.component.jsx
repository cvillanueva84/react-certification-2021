import React from 'react';
import styled from 'styled-components';

import VideoPlayer from '../../components/VideoPlayer';
import Tag from '../../components/Tag';

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
  max-width: 50vw;
  word-wrap: break-word;
  @media(max-width: 629px) {
    max-width: 100%;
  }
`;
const TagContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;
const TagTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
  text-align: center;
`;

function VideoMain(props) {

  const title = props.video.snippet.title;
  const id = props.video.id;
  const description = props.video.snippet.description;
  const tags = props.video.snippet.tags;

  return (
    <Container>
      <VideoPlayer id={id} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TagTitle>Tags</TagTitle>
      <TagContainer>
        {tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
    </Container>
  );
}

export default VideoMain;
