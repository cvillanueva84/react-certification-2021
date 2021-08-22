import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ListOfRelatedVideos from '../../components/ListOfRelatedVideos';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useStoreContext } from '../../state/Store.provider';
import { Title, Description, Video, VideoDetails, Grid } from './VideoDetailsView.styles';

function VideoDetailsView() {
  const { id } = useParams();
  const location = useLocation();
  const { videoTitle, videoDescription } = location.state;
  const url = 'https://www.youtube.com/embed/' + id;
  const [store] = useStoreContext();
  const { searchTerm } = store;
  return (
    <Grid data-testid="location-videoDetailsView" className="grid">
      <VideoDetails>
        <Video src={url} frameBorder="0" allowFullScreen></Video>
        <Title>{videoTitle}</Title>
        <Description>{videoDescription}</Description>
      </VideoDetails>
      <ListOfRelatedVideos videos={useYouTube(searchTerm)}></ListOfRelatedVideos>
    </Grid>
  );
}

export default VideoDetailsView;
