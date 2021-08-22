import React from 'react';
import Cards from '../../components/Cards';
import { Grid } from './FavoriteVideosView.styles';
import mock from '../../mock/youtube-videos-mock.json';

function FavoriteVideosViewPage() {
  return (
    <>
      <h1 align="center">Favorites: </h1>
      <Grid data-testid="location-home" className="grid">
        <Cards videos={mock}></Cards>
      </Grid>
    </>
  );
}

export default FavoriteVideosViewPage;
