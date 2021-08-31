import styled from 'styled-components';

const CardBody = styled.div`
  width: 100%;
  height: 20rem;
  cursor: pointer;
  overflow: hidden;
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
const Description = styled.div`
  font-size: 0.7rem;
`;

export { CardBody, ImageCard, WraperText, Title, Description };
