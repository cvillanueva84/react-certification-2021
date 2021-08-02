import React from 'react';
import styled from 'styled-components';

import VideoMain from '../../components/VideoMain';
import RelatedVideos from '../../components/RelatedVideos';

import VideoInfo from '../../utils/video-data.json'
import RelatedVideosData from '../../utils/related-videos.json'

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 78vh;
  /* height: 85.5vh; */
  overflow-y: auto;
  margin: 0 auto;
  @media (max-width: 1068px) {
    height: 91vh;
  }
  justify-content: center;
  @media (max-width: 629px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function VideoHome(props) {

  return (
    <Container>
        <VideoMain id={props.match.params.id} video={VideoInfo.items[0]} />
        <RelatedVideos id={props.match.params.id} videos={RelatedVideosData} />
    </Container>
  );
}

export default VideoHome;
