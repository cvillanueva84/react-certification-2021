import React, { useEffect, useRef, useState } from 'react';
import Cards from '../../components/Cards';
import styled from 'styled-components';
import youtube from '../../apis/youtube';

const Grid = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

function HomePage() {
  const sectionRef = useRef(null);
  const [dataVideos, setDataVideos] = useState({ items: [] });
  useEffect(async () => {
    const response = await youtube.get('/search', {
      params: {
        q: 'love of lesbian',
      },
    });
    setDataVideos(response.data);
  }, []);
  return (
    <Grid className="grid" ref={sectionRef}>
      <Cards videos={dataVideos}></Cards>
    </Grid>
  );
}

export default HomePage;
