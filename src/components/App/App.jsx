import React from 'react';

import HomePage from '../../pages/Home/Home.page';
import data from '../Files/youtube-videos-mock.json';

function App() {
  return <HomePage data={data} />;
}

export default App;
