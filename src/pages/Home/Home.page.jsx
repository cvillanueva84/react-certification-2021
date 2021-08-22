import React from 'react';
import Cards from '../../components/Cards';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useStoreContext } from '../../state/Store.provider';
import { Grid } from './Home.styles';

function HomePage() {
  const [store] = useStoreContext();
  const { searchTerm } = store;
  return (
    <Grid data-testid="location-home" className="grid">
      <Cards videos={useYouTube(searchTerm)}></Cards>
    </Grid>
  );
}

export default HomePage;
