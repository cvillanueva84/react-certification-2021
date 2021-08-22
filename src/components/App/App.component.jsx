import React, { useState, useEffect } from 'react';

import StyledDiv from '../StyledDiv';
import Header from '../Header';
import Videos from '../Videos/Videos.component';
import result from '../../mock/youtube-videos-mock';

function App() {
  const [toggleStatus, setToggleStatus] = useState(false);
  const [results, setResults] = useState(result);
  const [query, setQuery] = useState('wizeline');

  function handleToggle() {
    setToggleStatus((prevState) => !prevState);
  }

  function onHandleInput(event) {
    setQuery(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCfUvsxJf2gutiS10RwJX4nfPCAvWg60Z0`
    )
      .then((res) => res.json())
      .then((jsonData) => {
        setResults(jsonData);
      });
  }, [query]);

  if (toggleStatus) {
    return (
      <StyledDiv toggleStatus={toggleStatus}>
        <Header
          onHandleToggle={handleToggle}
          toggleStatus={toggleStatus}
          onHandleInput={onHandleInput}
          query={query}
        />
        <Videos videoList={results.items} />
      </StyledDiv>
    );
  }
  return (
    <div>
      <Header
        onHandleToggle={handleToggle}
        toggleStatus={toggleStatus}
        onHandleInput={onHandleInput}
        query={query}
      />
      <Videos videoList={results.items} />
    </div>
  );
}

export default App;
