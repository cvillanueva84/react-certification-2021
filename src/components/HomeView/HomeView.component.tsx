import React from 'react';
import styled from 'styled-components';
import VideoHome from '../VideoHome'
import Data from '../../utils/youtube-videos-mocks.json';

const Wrapper = styled.div`
  height: 78vh;
  /* height: 85.5vh; */
  overflow-y: auto;
  @media (max-width: 1068px) {
    height: 91vh;
  }
`;
const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
const Heading = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0 0 1rem;
`;

function HomeView() {

  return (
    <Wrapper>
      <Heading>For You</Heading>
      <VideoContainer>
        {/* {Data.regionCode} */}
        {Data.items.map((video, index) => {
          const title = video.snippet.title;
          const channelTitle = video.snippet.channelTitle;
          const thumbnail = video.snippet.thumbnails.medium.url;

          return (
            <VideoHome
              key={video.etag}
              title={title}
              thumbnail={thumbnail}
              channelTitle={channelTitle}
            />
          );
        })}
      </VideoContainer>
    </Wrapper>
  );
}

export default HomeView;
