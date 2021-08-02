import React from 'react';
import {
  Container,
  ButtonCard,
  CardContent,
  TitleVideo,
  CardBody,
  ImageCard,
  LinkCard,
} from './Card.styled';

function Card(props) {
  const { image, title, description, videoId } = props;
  console.log(videoId);
  return (
    <LinkCard to={`/view/${videoId}`}>
      <Container>
        <ButtonCard>
          <ImageCard image={image} />
        </ButtonCard>
        <CardContent>
          <TitleVideo>{title}</TitleVideo>
          <CardBody>{description}</CardBody>
        </CardContent>
      </Container>
    </LinkCard>
  );
}

export default Card;
