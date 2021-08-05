import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 345px;
  height: 345px;
  margin: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
`;

const ButtonCard = styled.button`
  width: 100%;
  display: block;
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
`;

const CardContent = styled.div`
  padding: 16px;
  cursor: pointer;
`;

const TitleVideo = styled.h2`
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  text-align: left;
`;

const CardBody = styled.p`
  font-size: 0.75rem;
  text-align: left;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  height: 90px;
  text-overflow: ellipsis;
  overflow: hidden;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
`;
const ImageCard = styled.div`
  display: block;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
`;
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
