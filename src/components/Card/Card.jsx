import React from 'react';
import { CardDiv, ImageDiv, InfoDiv, Title, Description } from './Card.styled';

const Card = ({ title, description, link }) => {
  return (
    <>
      <CardDiv>
        <ImageDiv>
          <img src={link} alt={title} />
        </ImageDiv>
        <InfoDiv>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoDiv>
      </CardDiv>
    </>
  );
};
export default Card;
