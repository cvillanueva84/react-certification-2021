import React from 'react';
import Card from '../../components/Card';
import { useLocation, Link } from 'react-router-dom';
import { routes } from '../../utils/constants';
function Cards(props) {
  const location = useLocation();
  const route = location.pathname;
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
  if (route === '/') {
    path = routes.video;
  } else {
    path = routes.favorites;
  }
  return (
    <>
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
            <Card
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            ></Card>
          </Link>
        );
      })}
    </>
  );
}

export default Cards;
