import React from 'react';
import { CardBody, ImageCard, WraperText, Title, Description } from './Card.styles';

function Card({ image, title, description }) {
  return (
    <CardBody id="cardBody">
      <ImageCard imageUrl={image}></ImageCard>
      <WraperText>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WraperText>
    </CardBody>
  );
}

export default Card;
