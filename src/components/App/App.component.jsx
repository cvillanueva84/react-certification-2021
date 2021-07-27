import React from 'react';
import Navbar from '../Navbar/Navbar.component'
import ListVideos from '../ListVideos/ListVideos.component';
import videos from '../../videos.js';


function App() {

  return (
    <>
    <Navbar/>    
    <ListVideos List = {videos}/>
    </>
  );
}

export default App;
