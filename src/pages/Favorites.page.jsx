import React, {useContext} from 'react';
import StyledCardVideo from '../components/CardVideo';
import GlobalContext from '../state/GlobalContext';

const Favorites = () => {
  const { dispatch, state } = useContext(GlobalContext);

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
      { state.favouriteVideos.map((video) => (
        <StyledCardVideo
        key={video.url} 
        title={video.title} 
        description={video.description} 
        picture={video.picture}
        url={video.url}
        showDetailView={() => console.log("Reproducir video")}
        />
      ))
      }
    </div>
    </>
  );
}

export default Favorites;