import React from 'react';
import Cards from '../../components/Cards';
import { Grid } from './FavoriteVideosView.styles';
import { storage } from '../../utils/storage';
import { FAVORITES_LIST_STORAGE_KEY } from '../../utils/constants';

function FavoriteVideosViewPage() {
  const Favorites = storage.get(FAVORITES_LIST_STORAGE_KEY);
  let withVideos = false;
  if (Favorites != null) {
    withVideos = Favorites.items.find((video) => video.id.kind === 'youtube#video');
  }
  return (
    <>
      <h1 align="center">Favorites: </h1>
      <Grid data-testid="location-FavoriteVideosViewPage" className="grid">
        <Cards videos={Favorites === null || !withVideos ? 'error' : Favorites}></Cards>
      </Grid>
    </>
  );
}

export default FavoriteVideosViewPage;
