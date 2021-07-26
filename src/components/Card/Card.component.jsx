import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  width: 320px;
  margin: 20px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #d0d0d0;
  text-align: center;
  flex-basis: 28%;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 10px;
`;

const Description = styled.div`
  margin: 10px;
  font-size: 12px;
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.imageC});
  width: 100%;
  height: 180px;
  border-radius: 5px;
  background-position: center;
`;

function Card(props) {
  const { image, title, description } = props;
  return (
    <CardBody>
      <CardImage imageC={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardBody>
  );
}

export default Card;
