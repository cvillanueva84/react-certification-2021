import React, { useEffect, useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import { CardVideoFavorite } from '../../components/CardVideo/CardVideo.component';
import { useFavorites } from '../../providers/Favorites';
import {
  RelatedVideosContainer,
  RelatedVideosTitle,
  VideoPlayer,
  VideoVisualizerContainer,
} from '../../components/VideoVisualizer/VideoVisualizer.elements';
import VideoContext from '../../components/Context/VideoContext';
import VideoFavoriteContext from '../../components/Context/VideoFavorite';

function FavoriteDetailsPage() {
  const { videoFavorite } = useContext(VideoFavoriteContext);

  const { video } = useContext(VideoContext);

  const [listVideos, setListVideo] = useState();
  const [state, dispatch] = useFavorites();
  console.log(dispatch);

  useEffect(() => {
    if (state) {
      setListVideo(
        state.map((videoFavoriteRelated) => (
          <CardVideoFavorite
            id={videoFavoriteRelated.id.videoId}
            key={videoFavoriteRelated.etag}
            video={videoFavoriteRelated}
          />
        ))
      );
    }
  }, [state]);

  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(state);
  const handleFavClick = () => {
    if (buttonClicked) {
      dispatch({
        type: 'DELETE',
        payload: video,
      });
      setButtonClicked(false);
    } else {
      dispatch({
        type: 'ADD',
        payload: video,
      });
      setButtonClicked(true);
    }
  };

  return (
    <>
      <Navbar />
      <SideMenu />
      <VideoVisualizerContainer>
        <VideoPlayer videoId={videoFavorite} />
        <RelatedVideosContainer>
          <FaHeart onClick={handleFavClick} color={buttonClicked ? '#F00' : '#000'} />
          <RelatedVideosTitle>Other Favorite Videos</RelatedVideosTitle>
          {listVideos}
        </RelatedVideosContainer>
      </VideoVisualizerContainer>
    </>
  );
}

export default FavoriteDetailsPage;
