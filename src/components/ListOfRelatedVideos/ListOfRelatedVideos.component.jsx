import React from 'react';
import RelatedVideo from '../../components/RelatedVideo';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  width: 500px;
  height: 500px;
  //padding: 40px;
  //margin: 20px auto;
  overflow: scroll;
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
