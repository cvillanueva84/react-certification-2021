import React from 'react';
import Cards from '../../components/Cards';
import styled from 'styled-components';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useSearchTerm } from '../../providers/SearchTerm';
const Grid = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

function HomePage() {
  const { searchTerm } = useSearchTerm();
  return (
    <Grid data-testid="location-home" className="grid">
      <Cards videos={useYouTube(searchTerm)}></Cards>
    </Grid>
  );
}

export default HomePage;
