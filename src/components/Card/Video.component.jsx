import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardDescription,
  CardImage
} from './Card.style';

export default function CardVideo({ name, description, image }) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardImage src={image}/>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardHeading>{name}</CardHeading>
        </CardFieldset>
        <CardFieldset>
          <CardDescription>{description}</CardDescription>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
}
