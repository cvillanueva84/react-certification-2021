import styled, { keyframes } from 'styled-components';

const CardsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 21rem;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  width: 1450px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 8px solid #1c5476;
  border-top: 8px solid #ccc;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;

const Homepage = styled.section`
  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;

export { CardsGrid, Homepage };
