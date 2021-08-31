import styled from 'styled-components';

const Video = styled.div`
  width: 100%;
`;

const Card = styled.div`
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #d3d3d3;
  color: #808080;
  box-shadow: 0 1.3px 1px rgba(0, 0, 0, 0.2);
`;

const CardImageContainer = styled.div`
  width: 150px;
  float: left;
  margin-right: 1rem;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 160px;
  height: 100px;
  object-fit: contain;
`;

const CardText = styled.div`
  padding: 1rem;
`;

export { Video, Card, CardImageContainer, CardImage, CardText };
