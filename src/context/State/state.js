import React, { createContext, useReducer } from 'react';

import reducer from './reducer';

import {
  HOVER_PROFILE,
  BLUR_PROFILE,
  TYPE_INPUT,
  LOAD_VIDEOS,
  SELECT_VIDEO,
  TOGGLE_DARK_MODE,
  TOGGLE_OPENED_DETAILS,
} from '../types';

export const StateContext = createContext();

const AppState = (props) => {
  const initialState = {
    profile: {
      showDropdown: false,
    },
    video: {
      search: 'wizeline',
      selectedVideo: {},
      videos: [],
      openedDetails: false,
    },
    darkMode: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Profile handlers
  const showProfileDropdown = () => {
    dispatch({ type: HOVER_PROFILE, payload: true });
  };

  const hideProfileDropdown = () => {
    dispatch({ type: BLUR_PROFILE, payload: false });
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

  const toggleOpenedDetails = (openedDetails) => {
    dispatch({ type: TOGGLE_OPENED_DETAILS, payload: !openedDetails });
  };

  return (
    <StateContext.Provider
      value={{
        profile: state.profile,
        video: state.video,
        darkMode: state.darkMode,
        hideProfileDropdown,
        showProfileDropdown,
        handleSearch,
        handleVideosList,
        handleSelectVideo,
        handleDarkMode,
        toggleOpenedDetails,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export const { Consumer: ConfigConsumer, Provider: ConfigProvider } = StateContext;
export default AppState;
