import React, { Fragment } from 'react';
import Card from '../../components/Card';

function Cards(props) {
  return (
    <Fragment>
      {props.videos.items.map((video) => {
        if (video.id.kind === 'youtube#video') {
          return (
            <Card
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            ></Card>
          );
        } else {
          return null;
        }
      })}
    </Fragment>
  );
}

export default Cards;
