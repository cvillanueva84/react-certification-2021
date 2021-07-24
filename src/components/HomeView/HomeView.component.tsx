import React from 'react';
import styled from 'styled-components';
import VideoHome from '../VideoHome'
import Data from '../../utils/youtube-videos-mocks.json';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  height: 74vh;
  overflow-y: auto;
`;

function HomeView() {

  return (
    <Container>
        {/* {Data.regionCode} */}
        {
            Data.items.map((video, index) => {
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
            })
        }
    </Container>
  );
}

export default HomeView;
