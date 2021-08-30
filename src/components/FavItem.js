import React, { useContext } from 'react';
import '../style/FavoriteVideosViewStyled.js';
import { GlobalContext } from './Context';
import { FavItemUi } from './ui/FavItemUi.js';


export const FavItem = ({ title, description, url, videoId }) => {
  const { myStateReducer, dispatch } = useContext(GlobalContext);

  const handleClickPlay = () => {
    dispatch({
      type: 'actionAddVideoDataFav',
      payload: {
        ...myStateReducer,
        videoDataFav: {
          title: title,
          description: description,
          url: url,
          videoId: videoId,
        },
      },
    });
  };

  const handleClickDelete = () => {
    dispatch({
      type: 'actionDelete',
      payload: videoId,
    });
  };

  return (
    <FavItemUi 
      title={title} 
      url={url} 
      description={description} 
      handleClickPlay={handleClickPlay} 
      handleClickDelete={handleClickDelete}
    />
  );
};

