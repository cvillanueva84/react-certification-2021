import React from 'react';

import { VideoData } from '../mock/VideoData';

import Video from './Video';

const Videos = () => {
  return (
    <div className="container">
      <div className="row justify-content-center g-3">
        {VideoData.map((videoItem) => (
          <Video
            title={videoItem.snippet.title}
            imagen={videoItem.snippet.thumbnails.medium.url}
            description={videoItem.snippet.description}
            key={videoItem.etag}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
