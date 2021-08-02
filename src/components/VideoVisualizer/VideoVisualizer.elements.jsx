import React from 'react';
import styled from 'styled-components';

export const VideoVisualizerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: center;
  padding: 2rem;
  align-content: center;

  top: ${(props) => props.theme.navbar_height};
  left: ${(props) => props.theme.sidemenu_width};

  width: calc(100vw - ${(props) => props.theme.sidemenu_width});
`;

export const RelatedVideosTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text_color};
`;

export const RelatedVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;

  width: 100%;
`;

const VideoPlayerEmbeded = styled.iframe`
  aspect-ratio: 16/9;
  width: calc(40vw - ${(props) => props.theme.sidemenu_width});
  min-width: 350px;
  margin-bottom: 2rem;
`;

export function VideoPlayer({ videoId }) {
  const source = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoPlayerEmbeded
      src={source}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
}
