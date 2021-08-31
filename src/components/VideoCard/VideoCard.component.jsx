import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Card, CardImageContainer, CardImage, CardText } from './VideoCardStyled';

const VideoCard = (video) => {
  return (
    <Link className="no-decoration-text" to={`./videoview/${video.id.videoId}`}>
      <Video>
        <Card>
          <CardImageContainer>
            <CardImage
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
          </CardImageContainer>
          <CardText>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </CardText>
        </Card>
      </Video>
    </Link>
  );
};

export default VideoCard;
