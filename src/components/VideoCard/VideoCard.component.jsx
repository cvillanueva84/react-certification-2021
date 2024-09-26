import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import {
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  VideoDescription,
} from './VideoCard.module';

import './VideoCard.styles.css';

function HomeView(props) {
  const { title, thumbnail, description, videoId } = props;
  const cardRef = useRef(null);

  return (
    <Link to={`/video/${videoId}`}>
      <Paper className="video-card" elevation={3} ref={cardRef}>
        <VideoThumbnail>
          <img alt={title} src={thumbnail} />
        </VideoThumbnail>
        <VideoInfo>
          <VideoTitle>
            <span>{title}</span>
          </VideoTitle>
          <VideoDescription>{description || 'No description :('}</VideoDescription>
        </VideoInfo>
      </Paper>
    </Link>
  );
}

export default HomeView;
