import React from 'react';

import './VideoPreview.styles.css';

function VideoPreview({ thumbnailURL, title, description, videoID }) {
  if (!videoID) return <></>;
  return (
    <article className="Event">
      <a
        className="Event-URL"
        href={`https://www.youtube.com/watch?v=${videoID}`}
        target="_blanck"
      >
        <figure className="Event-ImageContainer">
          <img className="Event-Image" src={thumbnailURL} alt={title} />
        </figure>
        <div className="Event-Details">
          <h3 className="Event-Title">{title}</h3>
          <p className="Event-Description">{description}</p>
        </div>
      </a>
    </article>
  );
}

export default VideoPreview;
