import React, { useState } from 'react';
import HomePage from '../../pages/Home/Home.page';
import NavBar from '../NavBar';
import useVideoApi from '../../pages/Home/useVideosAPI';
import DetailsView from '../DetailsView';

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
      <div>
        {/** Header */}
        <header>
          <NavBar.LightNavBar
            handleSearchField={handleSearchField}
            handleSearchButton={handleSearchButton}
          />
        </header>
        {/** Page main content */}
        <main>
          <DetailsView video={videotoPlay} relatedVideos={videos} />
        </main>
      </div>
    );
  }

  return (
    <div>
      {/** Header */}
      <header>
        <NavBar.LightNavBar
          handleSearchField={handleSearchField}
          handleSearchButton={handleSearchButton}
        />
      </header>
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
    </div>
  );
}

export default App;
