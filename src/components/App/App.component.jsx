import React, { useState } from 'react';
import HomePage from '../../pages/Home.page';
import NavBar from '../NavBar';
import useVideoApi from '../../hooks/useVideosAPI';
import DetailsView from '../../pages/DetailsView.page';


function App() {
  const { videos, loading, error, fetchVideos } = useVideoApi();
  const [searchField, setSearchField] = useState('');
  const [displayDetailView, setDisplayDetailView] = useState(false);
  const [videotoPlay, setVideotoPlay] = useState({
    url: '',
    title: '',
    description: '',
  });

  const handleSearchField = (event) => {
    setSearchField(event.target.value);
  };

  const handleSearchButton = () => {
    fetchVideos(searchField);
  };

  const showDetailView = (url, title, description) => {
    setVideotoPlay({ url: url, title: title, description: description });
    setDisplayDetailView(true);
  };

  if (displayDetailView) {
    return (
      <>
        {/** Header */}
          <NavBar.LightNavBar
            handleSearchField={handleSearchField}
            handleSearchButton={handleSearchButton}
          />
        {/** Page main content */}
        <main>
          <DetailsView video={videotoPlay} relatedVideos={videos} />
        </main>
      </>
    );
  }

  return (
    <>
      {/** Header */}
        <NavBar.LightNavBar
          handleSearchField={handleSearchField}
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
    </>
  );
}

export default App;
