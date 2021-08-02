import React from 'react';
import Cards from '../../components/Cards';
import styled from 'styled-components';
import { useYouTube } from '../../utils/hooks/useYouTube';
import mockVideos from '../../mock/youtube-videos-mock.json';
import { storage } from '../../utils/storage';
import { SEARCH_TERM_KEY } from '../../utils/constants';
const Grid = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

function HomePage() {
  let dataVideos;
  let youTubeVideos = useYouTube();
  if (storage.get(SEARCH_TERM_KEY) === null) {
    dataVideos = mockVideos;
  } else {
    dataVideos = youTubeVideos;
  }
  return (
    <Grid data-testid="location-home" className="grid">
      {/* <Cards videos={useYouTube('Lennon')}></Cards> */}
      {/* <Cards videos={mockVideos}></Cards> */}
      <Cards videos={dataVideos}></Cards>
    </Grid>
  );
}

export default HomePage;
