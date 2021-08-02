import React from 'react';
import styled from 'styled-components';
import VideoHome from '../VideoList';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
`;
const Videos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function RelatedVideos(props) {

  return (
    <Container>
      <Title>Up next</Title>
      <Videos>
        {props.videos?.items?.map((video, index) => {
          const title = video.snippet.title;
          const channelTitle = video.snippet.channelTitle;
          const thumbnail = video.snippet.thumbnails.medium.url;

          return (
            <VideoHome
              isRelated={true}
              key={video.etag}
              title={title}
              thumbnail={thumbnail}
              channelTitle={channelTitle}
            />
          );
        })}
      </Videos>
    </Container>
  );
}

export default RelatedVideos;
