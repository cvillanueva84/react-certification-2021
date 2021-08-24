import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ListOfRelatedVideos from '../../components/ListOfRelatedVideos';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useStoreContext } from '../../state/Store.provider';
import { storage } from '../../utils/storage';
import { FAVORITES_LIST_STORAGE_KEY } from '../../utils/constants';
import {
  FavoritesBtn,
  Title,
  Description,
  Video,
  VideoDetails,
  Grid,
} from './VideoDetailsView.styles';

function VideoDetailsView() {
  const [buttonAction, setButtonAction] = useState('Add');
  const { id } = useParams();
  const location = useLocation();
  const { videoTitle, videoDescription, image } = location.state;
  const url = 'https://www.youtube.com/embed/' + id;
  const { store } = useStoreContext();
  const { searchTerm } = store;
  const FavoritesList = storage.get(FAVORITES_LIST_STORAGE_KEY);
  const favoriteVideo = {
    id: {
      kind: 'youtube#video',
      videoId: id,
    },
    snippet: {
      title: videoTitle,
      description: videoDescription,
      thumbnails: {
        high: {
          url: image,
        },
      },
    },
  };
  const firstFavorite = {
    items: [favoriteVideo],
  };

  useEffect(() => {
    if (FavoritesList?.items) {
      //Add or Remove?
      let filterFavorites = FavoritesList.items.filter((e) => e.id.videoId === id);
      if (filterFavorites.length === 1) {
        setButtonAction('Remove');
      } else {
        setButtonAction('Add');
      }
    }
  }, [FavoritesList, id]);
  function handleClick() {
    if (buttonAction === 'Add') {
      if (!FavoritesList?.items) {
        //First Use
        storage.set(FAVORITES_LIST_STORAGE_KEY, firstFavorite);
      } else {
        FavoritesList.items[FavoritesList.items.length] = favoriteVideo;
        storage.set(FAVORITES_LIST_STORAGE_KEY, FavoritesList);
      }
      setButtonAction('Remove');
    } else if (buttonAction === 'Remove') {
      var index = FavoritesList.items.findIndex(function (e, i) {
        return e.id.videoId === id;
      });
      FavoritesList.items[index].id.videoId = 'deleted';
      FavoritesList.items[index].id.kind = 'youtube#channel';
      storage.set(FAVORITES_LIST_STORAGE_KEY, FavoritesList);
      setButtonAction('Add');
    }
  }
  return (
    <Grid data-testid="location-videoDetailsView" className="grid">
      <VideoDetails>
        <Video src={url} frameBorder="0" allowFullScreen></Video>
        <Title>{videoTitle}</Title>
        {store.sessionData.id === '' ? (
          <></>
        ) : (
          <>
            <FavoritesBtn data-testid="favoritesBtn" onClick={handleClick}>
              {buttonAction === 'Add' ? 'Add to favorites' : 'Remove from favorites'}
            </FavoritesBtn>
          </>
        )}
        <Description>{videoDescription}</Description>
      </VideoDetails>
      <ListOfRelatedVideos videos={useYouTube(searchTerm)}></ListOfRelatedVideos>
    </Grid>
  );
}

export default VideoDetailsView;
