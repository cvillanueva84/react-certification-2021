import React from 'react';
import Card from '../../components/Card';

function Cards(props) {
  const filteredVideos = props.videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  return (
    <>
      {filteredVideos.map((video) => {
        return (
          <Card
            image={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            description={video.snippet.description}
          ></Card>
        );
      })}
    </>
  );
}

export default Cards;
