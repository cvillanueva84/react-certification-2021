import React from 'react';
import {
  VideoWrapper,
  VideoBody,
  VideoDescription,
  VideoFieldset,
  VideoFrame,
  VideoHeader,
  VideoTitle,
} from './videoPlayer.styled';

export default function VideoPlayer({ name, description, id }) {
  return (
    <VideoWrapper>
      <VideoHeader>
        <VideoFrame src={`https://www.youtube.com/embed/${id}`} />
      </VideoHeader>
      <VideoBody>
        <VideoFieldset>
          <VideoTitle>{name}</VideoTitle>
          <VideoDescription>{description}</VideoDescription>
        </VideoFieldset>
      </VideoBody>
    </VideoWrapper>
  );
}
