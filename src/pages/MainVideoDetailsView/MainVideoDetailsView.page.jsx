import React from 'react';
import VideoDetailsView from '../../components/VideoDetailsView';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useStoreContext } from '../../state/Store.provider';

function MainVideoDetailsView() {
  const { store } = useStoreContext();
  const { searchTerm } = store;
  return (
    <>
      <VideoDetailsView
        type="Main"
        listOfVideos={useYouTube(searchTerm)}
      ></VideoDetailsView>
    </>
  );
}

export default MainVideoDetailsView;
