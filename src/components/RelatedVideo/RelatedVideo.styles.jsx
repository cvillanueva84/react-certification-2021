import styled from 'styled-components';

const CardBody = styled.div`
  display: flex;
  width: 29rem;
  height: 8rem;
  @media (max-width: 1200px) {
    width: 19rem;
    height: 6rem;
  }
  @media (max-width: 935px) {
    width: 39rem;
    height: 10rem;
  }
`;
const ImageCard = styled.div`
  width: 15rem;
  height: 7rem;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 935px) {
    width: 20rem;
    height: 9rem;
  }
`;
const Title = styled.div`
  width: 15rem;
  padding-left: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  overflow: hidden;
  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media (max-width: 935px) {
    font-size: 1.1rem;
  }
`;

export { CardBody, ImageCard, Title };
