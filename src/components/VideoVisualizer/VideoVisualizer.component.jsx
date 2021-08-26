import React, { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import {
  RelatedVideosContainer,
  RelatedVideosTitle,
  VideoPlayer,
  VideoVisualizerContainer,
} from './VideoVisualizer.elements';
import { CardVideo } from '../CardVideo/CardVideo.component';
import VideoContext from '../Context/VideoContext';
import { useFavorites } from '../../providers/Favorites';

function VideoVisualizer({ videoId, videos }) {
  const [listVideos, setListVideo] = useState();
  const { video } = useContext(VideoContext);
  useEffect(() => {
    if (videos) {
      setListVideo(
        videos.map((videoRelated) => (
          <CardVideo
            id={videoRelated.id.videoId}
            key={videoRelated.etag}
            video={videoRelated}
          />
        ))
      );
    }
  }, [videos]);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [state, dispatch] = useFavorites();
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
      <VideoVisualizerContainer>
        <VideoPlayer videoId={videoId} />
        <RelatedVideosContainer>
          <FaHeart onClick={handleFavClick} color={buttonClicked ? '#F00' : '#000'} />
          <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
          {listVideos}
        </RelatedVideosContainer>
      </VideoVisualizerContainer>
    </>
  );
}

export default VideoVisualizer;
