import React, { useState, useReducer } from 'react';
import HomePage from '../../pages/Home.page';
import NavBar from '../NavBar';
import useVideoApi from '../../hooks/useVideosAPI';
import DetailsView from '../../pages/DetailsView.page';
import GlobalContext from '../../state/GlobalContext';
import GlobalReducer from '../../reducers/GlobalReducer';

const initialState = {
  theme: 'light',
  searchText: 'wizeline',
};

function App() {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const { videos, loading, error, fetchVideos } = useVideoApi();
  const [displayDetailView, setDisplayDetailView] = useState(false);
  const [videotoPlay, setVideotoPlay] = useState({
    url: '',
    title: '',
    description: '',
  });

  const handleSearchButton = () => {
    fetchVideos(state.searchText);
  };

  const showDetailView = (url, title, description) => {
    setVideotoPlay({ url: url, title: title, description: description });
    setDisplayDetailView(true);
  };

  if (displayDetailView) {
    return (
      <>
        <GlobalContext.Provider value={{ state, dispatch }}>
          {/** Header */}
            <NavBar.LightNavBar
              handleSearchButton={handleSearchButton}
            />
          {/** Page main content */}
          <main>
            <DetailsView video={videotoPlay} relatedVideos={videos} />
          </main>
        </GlobalContext.Provider>
      </>
    );
  }

  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {/** Header */}
          <NavBar.LightNavBar
            handleSearchButton={handleSearchButton}
          />
        {/** Page main content */}
        <main>
          {!loading && videos ? (
            <HomePage videos={videos} showDetailView={showDetailView} />
          ) : !loading && error ? (
            <div>An error has ocurred</div>
          ) : (
            <div>Loading...</div>
          )}
        </main>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
