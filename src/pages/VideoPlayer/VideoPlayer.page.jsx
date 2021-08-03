import React from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import VideoVisualizer from '../../components/VideoVisualizer/VideoVisualizer.component';
import useVideo from '../../utils/hooks/useVideo';

function VideoPlayer({ theme, setTheme }) {
  const relatedId = new URLSearchParams(useLocation().search).get('v');

  const { videos } = useVideo({ relatedId });

  return (
    <>
      <Navbar />
      <SideMenu theme={theme} setTheme={setTheme} />
      <VideoVisualizer videoId={relatedId} videos={videos} />
    </>
  );
}

export default VideoPlayer;
