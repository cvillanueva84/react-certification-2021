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
  };
  const [videosState, dispatch] = useReducer(reducer, initialState);
  const history = useHistory()
  useEffect(() => {
    let mounted = true;
    const getVideos = async () => {
      if(mounted) {
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
      }
    };
    getVideos();

    return () => { mounted = false };
  }, [search, history]);

  return (
    <VideoListContext.Provider
      value={{
        setSearch,
        videosState,
      }}
    >
      {props.children}
    </VideoListContext.Provider>
  );
};

export default VideoListProvider;
