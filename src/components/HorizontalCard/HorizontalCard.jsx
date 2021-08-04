import React from 'react';
import { Container, Image, Title } from './HorizontalCard.styled';

const HorizontalCard = (props) => {
  const { image, title, videoId } = props;
  return (
    <Container to={`/view/${videoId}`}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

export default HorizontalCard;
