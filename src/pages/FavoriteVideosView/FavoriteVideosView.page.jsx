import React from 'react';
import Cards from '../../components/Cards';
import { Grid } from './FavoriteVideosView.styles';
import { storage } from '../../utils/storage';
import { FAVORITES_LIST_STORAGE_KEY } from '../../utils/constants';

function FavoriteVideosViewPage() {
  const Favorites = storage.get(FAVORITES_LIST_STORAGE_KEY);
  return (
    <>
      <h1 align="center">Favorites: </h1>
      <Grid data-testid="location-FavoriteVideosViewPage" className="grid">
        <Cards videos={Favorites === null ? 'error' : Favorites}></Cards>
      </Grid>
    </>
  );
}

export default FavoriteVideosViewPage;
