import React, { useState, useEffect } from 'react';
import {
  RelatedVideosContainer,
  RelatedVideosTitle,
  VideoPlayer,
  VideoVisualizerContainer,
} from './VideoVisualizer.elements';
import { CardVideo } from '../CardVideo/CardVideo.component';

function VideoVisualizer({ videoId, videos }) {
  const [listVideos, setListVideo] = useState();

  useEffect(() => {
    if (videos) {
      setListVideo(
        videos.map((video) => (
          <CardVideo id={video.id.videoId} key={video.etag} video={video} />
        ))
      );
    }
  }, [videos]);

  return (
    <>
      <VideoVisualizerContainer>
        <VideoPlayer videoId={videoId} />
        <RelatedVideosContainer>
          <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
          {listVideos}
        </RelatedVideosContainer>
      </VideoVisualizerContainer>
    </>
  );
}

export default VideoVisualizer;
