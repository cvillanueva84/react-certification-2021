import React, { createContext, useEffect, useState, useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { reducer } from './VideoList.reducer';
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
    const getVideos = async () => {
        try {
          const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${process.env.REACT_APP_GOOGLE_APP_API_KEY}&type=video&maxResults=23&q=${search}`;
          const response = await fetch(url);
          const data = await response.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: data.items });
          history.push('/')
        } catch (error) {
          dispatch({ type: 'FETCH_ERROR' });
          throw new Error(error);
        }
      
    };
    getVideos();

  }, [search, history]);

  const addToFavorites = (video) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: video
    })
  };


  return (
    <VideoListContext.Provider
      value={{
        setSearch,
        addToFavorites,
        videosState,
      }}
    >
      {props.children}
    </VideoListContext.Provider>
  );
};

export default VideoListProvider;
