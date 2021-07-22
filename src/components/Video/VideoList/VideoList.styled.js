import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 100px;
  position: relative;
  z-index: 0;
  width: 800px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
