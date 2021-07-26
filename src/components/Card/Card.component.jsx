import React from 'react';
import {CardWrapper, HeaderWrapper, H6, P} from './Card.styled';


function Card({ image, title, description }) {
  return (
    <CardWrapper>
      <HeaderWrapper image={image} />
      <div>
        <H6>{title}</H6>
        <P>{description}</P>
      </div>
    </CardWrapper>
  );
}

export default Card;
