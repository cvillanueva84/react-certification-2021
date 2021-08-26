import { FAVORITES_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const FavoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const favoriteVideos = state.concat(action.payload);
      storage.set(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteVideos));
      return [...favoriteVideos];
    }
    case 'DELETE': {
      const favoriteVideos = state.filter(
        (video) => video.id.videoId !== action.payload.id.videoId
      );
      storage.set(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteVideos));
      return [...favoriteVideos];
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
