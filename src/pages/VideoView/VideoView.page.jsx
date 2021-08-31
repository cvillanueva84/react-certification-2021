import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideosList from '../../components/RelatedVideosList';

const VideoView = () => {
  const { id: videoId } = useParams();
  const [inputValue, setInputValue] = useState('Wizeline');

  return (
    <>
      <NavBar setInputValue={setInputValue} inputValue={inputValue} />
      <VideoPlayer videoId={videoId} />
      <RelatedVideosList videoId={videoId} />
    </>
  );
};

export default VideoView;
