import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(10rem, 100%, 15rem);
  margin: 1rem;
  `;
const Image = styled.img`
  width: 100%;
  height: 8.1rem;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    filter: brightness(0.7);
  }
`;
const VideoInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 0.2rem;
`;
const ChannelImage = styled.img`
  flex-basis: 1rem;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;
const VideoText = styled.div`
  border-radius: 100%;
  width: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline;
  overflow: hidden;
  white-space: nowrap;
`;
const ChannelTitle = styled.p`
  margin: 0;
  font-size: 0.6rem;
  font-weight: lighter;
  display: inline;
  overflow: hidden;
  white-space: nowrap;
  color: hsl(0, 0%, 60%);
`;

function VideoHome(props: any) {

  return (
    <Container>
      <Image src={props.thumbnail} />
      <VideoInfo>
        <ChannelImage
          src={require('../../img/default-user.png')}
          href="user profile image"
        />
        <VideoText>
          <Title>{props.title.substring(0, 33)}</Title>
          <ChannelTitle>{props.channelTitle.substring(0, 33)}</ChannelTitle>
        </VideoText>
      </VideoInfo>
    </Container>
  );
}

export default VideoHome;
