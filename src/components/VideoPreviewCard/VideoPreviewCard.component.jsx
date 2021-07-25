import React from 'react';

import './VideoPreviewCard.styles.css';

function VideoPreviewCard({ thumbnailURL, title, description, videoID }) {
  if (!videoID) return <></>;
  return (
    <article className="VideoPreviewCard">
      <a
        className="VideoPreviewCard-URL"
        href={`https://www.youtube.com/watch?v=${videoID}`}
        target="_blanck"
      >
        <figure className="VideoPreviewCard-ImageContainer">
          <img className="VideoPreviewCard-Image" src={thumbnailURL} alt={title} />
        </figure>
        <div className="VideoPreviewCard-Details">
          <h3 className="VideoPreviewCard-Title">{title}</h3>
          <p className="VideoPreviewCard-Description">{description}</p>
        </div>
      </a>
    </article>
  );
}

export default VideoPreviewCard;
