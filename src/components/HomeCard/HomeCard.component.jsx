import React from 'react';
import {
  Card,
  CardLink,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from './HomeCard.styles';

function HomeCard({ videoId, imgUrl, title, description }) {
  if (!videoId) return <></>;
  return (
    <>
      <Card>
        <CardLink
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          role="button"
        >
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
