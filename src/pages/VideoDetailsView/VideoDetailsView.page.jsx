import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ListOfRelatedVideos from '../../components/ListOfRelatedVideos';
import mockVideos from '../../mock/youtube-videos-mock.json';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { SEARCH_TERM_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`;
const Description = styled.div`
  font-size: 1rem;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
const VideoDetails = styled.div`
  overflow: hide;
  width: 1300px;
  height: 700px;
  @media (max-width: 1800px) {
    width: 1100px;
    height: 600px;
  }
  @media (max-width: 1600px) {
    width: 900px;
    height: 550px;
  }
  @media (max-width: 1400px) {
    width: 700px;
    height: 400px;
  }
`;
const Grid = styled.section`
  display: flex;
  padding-left: 3.5rem;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 935px) {
    padding: 0rem;
    gap: 14rem;
    display: grid;
  }
`;

function VideoDetailsView() {
  const { id } = useParams();
  const location = useLocation();
  const { videoTitle, videoDescription } = location.state;
  const url = 'https://www.youtube.com/embed/' + id;
  let dataVideos;
  let youTubeVideos = useYouTube();
  if (storage.get(SEARCH_TERM_KEY) === null) {
    dataVideos = mockVideos;
  } else {
    dataVideos = youTubeVideos;
    console.log('no lo es');
  }
  return (
    <Grid data-testid="location-videoDetailsView" className="grid">
      <VideoDetails>
        <pre>
          <Link to="/"> ← go back</Link>
        </pre>
        <Video src={url} frameBorder="0" allowFullScreen></Video>
        <Title>{videoTitle}</Title>
        <Description>{videoDescription}</Description>
      </VideoDetails>
      {/* <ListOfRelatedVideos videos={mockVideos}></ListOfRelatedVideos> */}
      {/* <ListOfRelatedVideos videos={useYouTube('Lennon')}></ListOfRelatedVideos> */}
      <ListOfRelatedVideos videos={dataVideos}></ListOfRelatedVideos>
    </Grid>
  );
}

export default VideoDetailsView;
