import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardDescription,
  CardImage,
} from './Card.style';

export default function CardVideo({ name, description, image }) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImage src={image} alt="NO IMAGE" />
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardHeading>{name}</CardHeading>
          <CardDescription>{description}</CardDescription>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
}
