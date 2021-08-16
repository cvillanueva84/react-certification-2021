import React, { createContext, useReducer } from 'react';

import reducer from './reducer';

import {
  HOVER_AVATAR,
  BLUR_AVATAR,
  TYPE_INPUT,
  LOAD_VIDEOS,
  SELECT_VIDEO,
  TOGGLE_DARK_MODE,
} from '../types';

export const StateContext = createContext();

const AppState = (props) => {
  const initialState = {
    avatar: {
      showDropdown: false,
    },
    video: {
      search: 'wizeline',
      selectedVideo: {},
      videos: [],
    },
    darkMode: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Avatar handlers
  const showAvatarDropdown = () => {
    dispatch({ type: HOVER_AVATAR, payload: true });
  };

  const hideAvatarDropdown = () => {
    dispatch({ type: BLUR_AVATAR, payload: false });
  };

  // NavBar handlers
  const handleSearch = (event) => {
    dispatch({ type: TYPE_INPUT, payload: event.target.value });
  };

  // VideoList Handlers
  const handleVideosList = (videos) => {
    dispatch({ type: LOAD_VIDEOS, payload: videos });
  };

  const handleSelectVideo = (item) => {
    dispatch({ type: SELECT_VIDEO, payload: item });
  };

  const handleDarkMode = (mode) => {
    dispatch({ type: TOGGLE_DARK_MODE, payload: !mode });
  };

  return (
    <StateContext.Provider
      value={{
        avatar: state.avatar,
        video: state.video,
        darkMode: state.darkMode,
        hideAvatarDropdown,
        showAvatarDropdown,
        handleSearch,
        handleVideosList,
        handleSelectVideo,
        handleDarkMode,
      }}
    >
      {/* 
        This button is for test StateContext
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log('STATE ->');
          console.log(state);
        }}
      >
        STATE
      </button> */}
      {props.children}
    </StateContext.Provider>
  );
};

export default AppState;
