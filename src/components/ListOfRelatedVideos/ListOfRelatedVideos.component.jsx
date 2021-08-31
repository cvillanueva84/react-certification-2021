import React from 'react';
import RelatedVideo from '../../components/RelatedVideo';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Box } from './ListOfRelatedVideos.styles';
import { routes } from '../../utils/constants';

function ListOfRelatedVideos(props) {
  const location = useLocation();
  const route = location.pathname;
  const { id } = useParams();
  if (props.videos === 'error') {
    return (
      <>
        <h1>You haven't added any video to your favorites yet</h1>
      </>
    );
  }
  const filteredVideos = props.videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  var path = '';
  if (route === '/' + routes.video + '/' + id) {
    path = routes.video;
  } else {
    path = routes.favorites;
  }
  return (
    <Box>
      {filteredVideos.map((video) => {
        return (
          <Link
            key={video.id.videoId}
            to={{
              pathname: `/${path}/${video.id.videoId}`,
              state: {
                videoTitle: video.snippet.title,
                videoDescription: video.snippet.description,
                image: video.snippet.thumbnails.high.url,
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
