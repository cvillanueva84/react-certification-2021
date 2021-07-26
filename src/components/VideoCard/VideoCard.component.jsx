import React from 'react';
import styled from 'styled-components';

import './VideoCard.styles.css';

const VideoThumbnal = styled.div`
  height: auto;
  width: 300px;
`;

const VideoTitle = styled.div`
  padding: 0 20px;
  text-align: left;
`;

function HomeView(props) {
  const { title, thumbnail } = props;

  return (
    <div className="video-card">
      <VideoThumbnal>
        <img alt={title} src={thumbnail} />
      </VideoThumbnal>
      <VideoTitle>
        <span>{title}</span>
      </VideoTitle>
    </div>
  );
}

export default HomeView;
