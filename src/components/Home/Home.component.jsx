import React from 'react';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import Card from '../Card';
import { CardsContainer, Container, Loader, Typography } from '../UI';
// import data from '../../mocks/youtube.json';

const Home = () => {
  const { videoList, loading, error } = useFetchVideos();

  // const videoList = data.items;
  // const loading = false;

  return (
    <Container>
      <Typography tagName="h1" center weight="300" className="title py-1">
        Welcome to the Challenge!
      </Typography>
      <CardsContainer>
        {loading ? (
          <Loader data-testid="loader" />
        ) : (
          videoList.map(
            (item) =>
              item.id.kind === 'youtube#video' && (
                <Card
                  key={item.id.videoId}
                  item={item}
                  path={`/video/${item.id.videoId}`}
                />
              )
          )
        )}
        {!loading && error && <span>{error}</span>}
      </CardsContainer>
    </Container>
  );
};

export default Home;
