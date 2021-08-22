import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

export { Grid };
