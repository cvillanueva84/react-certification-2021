import React, { useEffect, useRef } from 'react';
import Cards from '../../components/Cards';
import styled from 'styled-components';
import { useYouTube } from '../../utils/hooks/useYouTube';
import mockVideos from '../../mock/youtube-videos-mock.json';
const Grid = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <Grid className="grid" ref={sectionRef}>
      {/* <Cards videos={useYouTube('Lennon')}></Cards> */}
      <Cards videos={mockVideos}></Cards>
    </Grid>
  );
}

export default HomePage;
