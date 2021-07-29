import React, { useRef } from 'react';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Cards from '../../components/Cards';
import styled from 'styled-components';

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
      <Cards videos={mockVideos}></Cards>
    </Grid>
  );
}

export default HomePage;
