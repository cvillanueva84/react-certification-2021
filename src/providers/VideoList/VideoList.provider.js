import React, { createContext, useEffect, useState, useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { reducer } from './VideoList.reducer';
import Swal from 'sweetalert2'
import { useFetch } from '../../utils/hooks/useFetch';
export const VideoListContext = createContext();

const VideoListProvider = (props) => {
  const [search, setSearch] = useState('wizeline');
  const { videos } = useFetch(search);
  const initialState = {
    loading: true,
    posts: [],
    error: '',
    favoriteVideos: []
  };
  const [videosState, dispatch] = useReducer(reducer, initialState);
  const history = useHistory()

  useEffect(() => {
    dispatch({
      type: 'FETCH_SUCCESS',
      payload: videos
    })
    history.push('/')
  }, [ videos, history])



  const addToFavorites = (video) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: video
    })
    Swal.fire(
      'Video added to your favorites'
    )
  };

  const removeFromFavorites = id => {
    const favoriteVideosFromLocalStorage = localStorage.getItem('favorite_videos');
    const arrayOfVideos = JSON.parse(favoriteVideosFromLocalStorage)
    const filteredVideos = arrayOfVideos.filter(video => video.id.videoId !== id)
    localStorage.setItem('favorite_videos', JSON.stringify(filteredVideos))
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: filteredVideos
    })
    Swal.fire(
      'Video has been removed from favorites'
    )
  }

  return (
    <VideoListContext.Provider
      value={{
        setSearch,
        addToFavorites,
        removeFromFavorites,
        videosState, 
      }}
    >
      {props.children}
    </VideoListContext.Provider>
  );
};

export default VideoListProvider;
