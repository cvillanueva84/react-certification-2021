import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  @media (min-width: 770px) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 1135px) {
    width: 1135px;
  }
  @media (min-width: 1500px) {
    width: 1500px;
  }
  @media (min-width: 1865px) {
    width: 1865px;
    justify-content: flex-start;
  }
`;
