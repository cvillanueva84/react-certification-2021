import React, { createContext, useContext, useReducer } from 'react';
import { FAVORITES_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import FavoritesReducer from './Favorites.reducer';

const favoriteVideos = storage.get(FAVORITES_STORAGE_KEY) || [];
const initialState = favoriteVideos.length ? JSON.parse(favoriteVideos) : [];
const FavoritesContext = createContext();

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without an FavoritesProvider`);
  }
  return context;
};

const FavoritesProvider = ({ children }) => {
  const favorites = useReducer(FavoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={favorites}>{children}</FavoritesContext.Provider>
  );
};

export { useFavorites, FavoritesProvider };
