import React from 'react';
import { videoData } from '../../../youtube-videos-mock';
import { Container } from './VideoList.styled';
import VideoItem from '../VideoItem/VideoItem.component';

export default function VideoList() {
  const { items } = videoData;

  const avatar = items[0].snippet.thumbnails.default.url;

  return (
    <Container>
      {items.slice(1).map((item) => {
        const {
          id: { videoId },
        } = item;

        const {
          snippet: {
            thumbnails: {
              medium: { url },
            },
          },
        } = item;

        const {
          snippet: { title },
        } = item;

        const {
          snippet: { description },
        } = item;

        return (
          <VideoItem
            key={videoId}
            url={url}
            title={title}
            description={description}
            avatar={avatar}
          />
        );
      })}
    </Container>
  );
}
