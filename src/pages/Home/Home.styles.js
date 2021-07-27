import styled from 'styled-components';

const CardsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 21rem;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  width: 1450px;
`;

const Homepage = styled.section`
  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;

export { CardsGrid, Homepage };
