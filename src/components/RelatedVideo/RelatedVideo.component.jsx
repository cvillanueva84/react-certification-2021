import React from 'react';
import styled from 'styled-components';
const CardBody = styled.div`
  width: 100%;
  height: 20rem;
  cursor: pointer;
  box-shadow: #000 1px 1px 0, #000 2px 2px 0, #000 3px 3px 0, #000 4px 4px 0,
    #000 5px 5px 0, #000 6px 6px 0, #000 7px 7px 0, #000 8px 8px 0;
  :hover {
    background-color: #f8f7f7;
    box-shadow: red 1px 1px 0, red 2px 2px 0, red 3px 3px 0, red 4px 4px 0, red 5px 5px 0,
      red 6px 6px 0, red 7px 7px 0, red 8px 8px 0;
  }
`;
const ImageCard = styled.div`
  width: 100%;
  height: 10rem;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
`;
const WraperText = styled.div`
  padding: 0.5rem;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

function RelatedVideo({ image, title }) {
  return (
    <CardBody>
      <ImageCard imageUrl={image}></ImageCard>
      <WraperText>
        <Title>{title}</Title>
      </WraperText>
    </CardBody>
  );
}

export default RelatedVideo;
