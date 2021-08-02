import React, { useRef } from 'react';
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
  const sectionRef = useRef(null);
  // let dataVideos;
  // let youTubeVideos = useYouTube(storage.get(SEARCH_TERM_KEY));
  // if (storage.get(SEARCH_TERM_KEY) === null) {
  //   dataVideos = mockVideos;
  // } else {
  //   dataVideos = youTubeVideos;
  // }
  return (
    <Grid className="grid" ref={sectionRef}>
      {/* <Cards videos={useYouTube('Lennon')}></Cards> */}
      <Cards videos={mockVideos}></Cards>
      {/* <Cards videos={dataVideos}></Cards> */}
    </Grid>
  );
}

export default HomePage;
