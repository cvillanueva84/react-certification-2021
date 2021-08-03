import React from 'react';
import StyledCardVideo from '../../components/CardVideo';
//import { youtubevideos } from '../../mocks/youtubevideos';

const HomePage = ({videos, showDetailView}) => {

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
      { videos.map((video) => (
        <StyledCardVideo
        key={video.id.videoId} 
        title={video.snippet.title} 
        description={video.snippet.description} 
        picture={video.snippet.thumbnails.medium.url}
        url={video.id.videoId}
        showDetailView={showDetailView}
        />
      ))
      /*youtubevideos.map((video, index) => (
        <StyledCardVideo
        key={index} 
        title={video.snippet.title} 
        description={video.snippet.description} 
        picture={video.snippet.thumbnails.medium.url}
        />
      ))*/
      }
    </div>
    </>
  );
}

export default HomePage;
