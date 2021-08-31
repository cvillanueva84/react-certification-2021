import React, { useLayoutEffect } from 'react';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { Container, EmbedVideo, VideoTitle, VideoDescription } from './VideoPlayerStyled';

const VideoPlayer = ({ videoId }) => {
  const { singleVideo, fetchSingleVideo } = useYoutubeApi();

  useLayoutEffect(() => {
    fetchSingleVideo(videoId);
  });

  return (
    <Container>
      <EmbedVideo
        dangerouslySetInnerHTML={{
          __html: singleVideo.items[0] && singleVideo.items[0].player.embedHtml,
        }}
      />
      <VideoTitle>
        {singleVideo.items[0] && singleVideo.items[0].snippet.title}
      </VideoTitle>
      <VideoDescription>
        {singleVideo.items[0] && singleVideo.items[0].snippet.description}
      </VideoDescription>
    </Container>
  );
};

export default VideoPlayer;
