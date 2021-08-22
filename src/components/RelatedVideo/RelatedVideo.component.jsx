import React from 'react';
import { CardBody, ImageCard, Title } from './RelatedVideo.styles';

function RelatedVideo({ image, title }) {
  return (
    <CardBody id="relatedVideo">
      <ImageCard imageUrl={image}></ImageCard>
      <Title>{title}</Title>
    </CardBody>
  );
}

export default RelatedVideo;
