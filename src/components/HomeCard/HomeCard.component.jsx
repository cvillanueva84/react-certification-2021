import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Card,
  CardLink,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from './HomeCard.styles';

function HomeCard({ videoId, imgUrl, title, description }) {
  const history = useHistory();

  const handleClick = () => history.push(`/videoDetails/${videoId}`);
  if (!videoId) return <></>;
  return (
    <>
      <Card>
        <CardLink onClick={handleClick}>
          <CardHeader src={imgUrl} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </CardLink>
      </Card>
    </>
  );
}

export default HomeCard;
