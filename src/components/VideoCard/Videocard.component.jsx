import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 55vh;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: ${(props) => props.theme.videoCard};
  overflow: hidden;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

const VideoTitle = styled.h2`
  font-size: 1.2rem;
  margin: 10px 10px;
  color: ${(props) => props.theme.text};
`;

const VideoDescription = styled.p`
  margin: 0px 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
`;

function Videocard({ video }) {
  const { title, description, thumbnails } = video.snippet;
  return (
    <VideoContainer>
      <VideoThumbnail src={thumbnails.medium.url} alt="video" />
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </VideoContainer>
  );
}

export default Videocard;
