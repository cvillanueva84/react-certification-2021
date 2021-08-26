import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import { CardVideo } from '../../components/CardVideo/CardVideo.component';
import { useFavorites } from '../../providers/Favorites';
import {
  RelatedVideosContainer,
  RelatedVideosTitle,
} from '../../components/VideoVisualizer/VideoVisualizer.elements';

function FavoritesPage() {
  const [listVideos, setListVideo] = useState();
  const [state, dispatch] = useFavorites();
  console.log(dispatch);

  useEffect(() => {
    if (state) {
      setListVideo(
        state.map((video) => (
          <CardVideo id={video.id.videoId} key={video.etag} video={video} />
        ))
      );
    }
  }, [state]);
  return (
    <>
      <Navbar />
      <SideMenu />
      <RelatedVideosContainer>
        <RelatedVideosTitle>Favorite Videos</RelatedVideosTitle>
        {listVideos}
      </RelatedVideosContainer>
    </>
  );
}

export default FavoritesPage;
