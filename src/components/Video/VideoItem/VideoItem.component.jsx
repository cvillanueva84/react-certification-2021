import React from 'react';
import {
  CardContainer,
  ImageContainer,
  Image,
  VideoInfo,
  VideoTitle,
  VideoDescription,
  ChannelAvatar,
} from './VideoItem.styled';

export default function VideoItem({ url, title, description, avatar }) {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image src={url} alt="thumbnails" />
        </ImageContainer>
        <VideoInfo>
          <ChannelAvatar src={avatar} />
          <VideoTitle>{title}</VideoTitle>
          <VideoDescription>{description}</VideoDescription>
        </VideoInfo>
      </CardContainer>
    </>
  );
}
