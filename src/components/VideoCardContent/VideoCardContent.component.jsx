import React from 'react';

export const VideoCardContent = ({ video }) => {
  return (
    <div>
      <img
        className="videoCardMedia"
        src={video.snippet.thumbnails.high.url}
        alt={video.kind}
      />
      <div className="videoTextContainer">
        <h3 className="videoCardTitle">{video.snippet.title}</h3>
        <span className="videoCardDescription">
          {video.snippet.description || 'Este video no cuenta con descripción'}
        </span>
      </div>
    </div>
  );
};

export default VideoCardContent;
