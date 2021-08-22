import React from 'react';
import RelatedVideo from '../../components/RelatedVideo';
import { Link } from 'react-router-dom';
import { Box } from './ListOfRelatedVideos.styles';

function ListOfRelatedVideos(props) {
  const filteredVideos = props.videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  return (
    <Box>
      {filteredVideos.map((video) => {
        return (
          <Link
            key={video.id.videoId}
            to={{
              pathname: `/video/${video.id.videoId}`,
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
