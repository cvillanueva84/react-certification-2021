import React from 'react';
import RelatedVideo from '../../components/RelatedVideo';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  width: 30rem;
  height: 48rem;
  overflow-y: scroll;
  @media (max-width: 1200px) {
    width: 20rem;
  }
  @media (max-width: 935px) {
    width: 40rem;
    height: 50rem;
  }
`;
function ListOfRelatedVideos(props) {
  const filteredVideos = props.videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  return (
    <Box>
      {filteredVideos.map((video) => {
        return (
          <Link
            to={{
              pathname: `/${video.id.videoId}`,
              state: {
                videoTitle: video.snippet.title,
                videoDescription: video.snippet.description,
              },
            }}
          >
            <RelatedVideo
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
            ></RelatedVideo>
          </Link>
        );
      })}
    </Box>
  );
}

export default ListOfRelatedVideos;
