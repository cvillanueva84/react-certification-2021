import React from 'react';
import {
  CardVideoDisplayerContainer,
  CardVideoContainer,
  CardVideoImage,
  CardVideoBottom,
} from './CardVideo.elements';

function CardVideo({ video }) {
  return (
    <>
      <CardVideoContainer>
        <CardVideoImage src={video.snippet.thumbnails.high.url} />
        <CardVideoBottom
          title={video.snippet.title}
          description={video.snippet.description}
        />
      </CardVideoContainer>
    </>
  );
}

function CardVideoDisplayer({ videos }) {
  return (
    <>
      <CardVideoDisplayerContainer>
        {videos.map((video) => (
          <CardVideo key={video.etag} video={video} />
        ))}
      </CardVideoDisplayerContainer>
    </>
  );
}

export default CardVideoDisplayer;
