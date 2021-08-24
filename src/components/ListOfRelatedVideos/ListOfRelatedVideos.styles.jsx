import styled from 'styled-components';

const Box = styled.div`
  width: 30rem;
  height: 48rem;
  overflow-y: scroll;
  @media (max-width: 1200px) {
    width: 20rem;
  }
  @media (max-width: 935px) {
    width: 40rem;
    height: 50rem;
  }
`;
export { Box };
