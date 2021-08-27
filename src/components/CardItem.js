import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from './Context';
import {CardItemUi}  from './ui/CardItemUi'

export const CardItem = ({ title, description, url, videoId }) => {

  const { myStateReducer, dispatch } = useContext(GlobalContext);

  const handleClick = () => {
      dispatch({
        type: 'actionAddVideoData',
        payload: {
          ...myStateReducer,
          videoData: {
            title: title,
            description: description,
            url: url,
            videoId: videoId
          }
        }
      });
  }

  return (
    <CardItemUi 
      title={title} 
      description={description} 
      url={url} 
      handleClick={handleClick}
    />
  );

};

