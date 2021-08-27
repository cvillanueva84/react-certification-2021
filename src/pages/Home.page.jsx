import React, {useContext} from 'react';
import StyledCardVideo from '../components/CardVideo';
import GlobalContext from '../state/GlobalContext';

const HomePage = ({videos, showDetailView}) => {
  const { dispatch, state } = useContext(GlobalContext);

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
      }
    </div>
    </>
  );
}

export default HomePage;
