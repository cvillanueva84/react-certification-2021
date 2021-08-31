import React from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Card,
  CardImageContainer,
  CardImage,
  CardText,
} from './RelatedVideoCardStyled';

const RelatedVideoCard = ({ video }) => {
  return (
    <Link
      className="no-decoration-text"
      to={`./${video.id.videoId}`}
      onClick={() => window.location.reload()}
    >
      <Video>
        <Card>
          <CardImageContainer>
            <CardImage
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </CardImageContainer>
          <CardText>
            <h3>{video.snippet.title}</h3>
          </CardText>
        </Card>
      </Video>
    </Link>
  );
};

export default RelatedVideoCard;
