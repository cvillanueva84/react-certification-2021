import styled from 'styled-components';

const Video = styled.div`
  width: 345px;
  height: 345px;
  padding: 0.5rem;
`;

const Card = styled.div`
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #d3d3d3;
  color: #808080;
  box-shadow: 0 1.3px 1px rgba(0, 0, 0, 0.2);
`;

const CardImageContainer = styled.div`
  height: 140px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  object-position: 0 -50px;
`;

const CardText = styled.div`
  padding: 1rem;

  h3 {
    line-height: 1.7rem;
    margin-bottom: 1rem;
  }
`;

export { Video, Card, CardImageContainer, CardImage, CardText };
