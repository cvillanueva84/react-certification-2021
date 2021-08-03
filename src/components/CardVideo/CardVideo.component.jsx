import React, { useEffect, useState } from 'react';
import LinkVideo from '../Link.element';
import {
  CardVideoDisplayerContainer,
  CardVideoContainer,
  CardVideoImage,
  CardVideoBottom,
} from './CardVideo.elements';

export function CardVideo({ video, id }) {
  const urlVideo = `/watch?v=${id}`;

  return (
    <>
      <LinkVideo to={urlVideo}>
        <CardVideoContainer>
          <CardVideoImage src={(video.snippet.thumbnails.high.url)? video.snippet.thumbnails.high.url: video.snippet.thumbnails.default.url } />
          <CardVideoBottom
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </CardVideoContainer>
      </LinkVideo>
    </>
  );
}

function CardVideoDisplayer({ videos }) {
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
      <CardVideoDisplayerContainer>{listVideos}</CardVideoDisplayerContainer>
    </>
  );
}

export default CardVideoDisplayer;
