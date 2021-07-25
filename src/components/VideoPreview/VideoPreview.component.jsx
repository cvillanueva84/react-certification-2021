import React from 'react';

import './VideoPreview.styles.css';

function VideoPreview({ thumbnailURL, title, description }) {
  return (
    <>
      <img src={thumbnailURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default VideoPreview;
