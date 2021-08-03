import React from 'react';
import Navbar from '../Navbar/Navbar.component'
import ListVideos from '../ListVideos/ListVideos.component';
import videos from '../../videos.js';
import VideoDetails from '../VideoDetails/VideoDetails.component'

function App() {

  const [dataVideos, setDataVideos] = React.useState([]); 
  const [showDetails, setShowDetails] = React.useState(false);
  const [videoSelected, setVideoSelected] = React.useState('');

  const apiKey = 'AIzaSyBLgZkvZQtw0iEKY9tKCq5oJIPN5WZVmuQ';

  React.useState(()=>{

  },[dataVideos]);

  const hideList = (item) =>{
    setShowDetails(true); 
    // console.log('INFO ITEM: ')
    // console.log(item)
    setVideoSelected(item);
  }
  
  const dataFromSearch = (e,busqueda) =>{
    e.preventDefault();    
    setShowDetails(false); 
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${apiKey}&type=video&maxResults=25&q=${busqueda}`)
         .then(res => {
             return res.json()
         })
         .then(data => {
             console.log(data); 
            setDataVideos(data); 
         }).catch(error=> console.log(error))
         
  }


  return (    
    <>
    <Navbar dataFromSearch = {dataFromSearch}/>    

    {
      dataVideos.length === 0 ? (
        null
      ):(          
        !showDetails ? (
          <ListVideos className = "lista" List = {videos} dataVideos = {dataVideos} hideList = {hideList}/>      
        ): (
          <VideoDetails videoSelected = {videoSelected}/>
        )      
      )
    }

    
    </>
  );
}

export default App;
