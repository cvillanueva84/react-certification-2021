import React, { createContext, useEffect, useState, useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { reducer } from './VideoList.reducer';
import Swal from 'sweetalert2'
export const VideoListContext = createContext();

const VideoListProvider = (props) => {
  const [search, setSearch] = useState('wizeline');
  const initialState = {
    loading: true,
    posts: [],
    error: '',
    favoriteVideos: []
  };
  const [videosState, dispatch] = useReducer(reducer, initialState);
  const history = useHistory()
  useEffect(() => {
    let mounted  = true;
    const getVideos = async () => {
        try {
          const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${process.env.REACT_APP_GOOGLE_APP_API_KEY}&type=video&maxResults=23&q=${search}`;
          const response = await fetch(url);
          if (mounted) {
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data.items });
          }
          history.push('/')
        } catch (error) {
          dispatch({ type: 'FETCH_ERROR' });
          throw new Error(error);
        }
      
    };
    getVideos();
    return () => mounted = false;

  }, [search, history]);

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
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: id
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
        videosState, 
        removeFromFavorites
      }}
    >
      {props.children}
    </VideoListContext.Provider>
  );
};

export default VideoListProvider;
