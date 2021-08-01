import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ListOfRelatedVideos from '../../components/ListOfRelatedVideos';
import mockVideos from '../../mock/youtube-videos-mock.json';
const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;
const Description = styled.div`
  font-size: 0.7rem;
`;
const VideoDetails = styled.div``;
const Grid = styled.section`
  display: flex;
  gap: 2.5rem;
  // padding: 2rem;
`;

function VideoDetailsView() {
  const { id } = useParams();
  const location = useLocation();
  const { videoTitle, videoDescription } = location.state;
  const url = 'https://www.youtube.com/embed/' + id;
  return (
    <section>
      <Grid className="grid">
        <VideoDetails>
          <pre>
            <Link to="/"> ← go back</Link>
          </pre>
          <iframe
            width="800"
            height="450"
            allowFullScreen
            frameBorder="0"
            src={url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
          <Title>{videoTitle}</Title>
          <Description>{videoDescription}</Description>
        </VideoDetails>

        <ListOfRelatedVideos videos={mockVideos}></ListOfRelatedVideos>
      </Grid>
    </section>
  );
}

export default VideoDetailsView;
