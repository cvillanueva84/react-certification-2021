import React from 'react';
import {
  VideoCardItem,
  VideoThumbnail,
  VideoCardDetailContainer,
  VideoTitle,
  VideoDescription,
} from './VideoCard.styled.component';

function VideoCard(props) {
  const { title, description, thumbnails } = props;

  return (
    <VideoCardItem>
      {/* <VideoThumbnail src={thumbnails.medium.url} alt={`${title}`} /> */}
      <VideoThumbnail backUrl={thumbnails.medium.url} />
      <VideoCardDetailContainer>
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription>{description}</VideoDescription>
      </VideoCardDetailContainer>
    </VideoCardItem>
  );
}

export default VideoCard;
