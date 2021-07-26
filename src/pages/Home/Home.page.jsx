import React from 'react';
import StyledCardVideo from '../../components/CardVideo';
import { youtubevideos } from '../../mocks/youtubevideos';

function HomePage() {

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
      {youtubevideos.map((video, index) => (
        <StyledCardVideo
        key={index} 
        title={video.snippet.title} 
        description={video.snippet.description} 
        picture={video.snippet.thumbnails.medium.url}
        />
      ))
      }
    </div>
    </>
  );
}

export default HomePage;
