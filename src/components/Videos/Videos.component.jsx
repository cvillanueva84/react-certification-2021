import React from 'react';

import Video from '../Video/Video.component';

function Videos(props) {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        {props.videoList.map((video) => {
          return (
            <Video
              key={video.etag}
              title={video.snippet.title}
              description={video.snippet.description}
              videoUrl={video.snippet.thumbnails.medium.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
