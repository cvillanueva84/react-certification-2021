import React from 'react';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
function Cards(props) {
  const filteredVideos = props.videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  return (
    <>
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
