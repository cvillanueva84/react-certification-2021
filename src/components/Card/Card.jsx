import React from 'react';
import {
  Container,
  ButtonCard,
  CardContent,
  TitleVideo,
  CardBody,
  ImageCard,
} from './Card.styled';

function Card(props) {
  return (
    <Container>
      <ButtonCard>
        <ImageCard image={props.image} />
      </ButtonCard>
      <CardContent>
        <TitleVideo>{props.title}</TitleVideo>
        <CardBody>{props.description}</CardBody>
      </CardContent>
    </Container>
  );
}

export default Card;
