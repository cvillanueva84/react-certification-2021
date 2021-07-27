import React from 'react';
import data from '../../mock/youtube-videos-mock.json';
import HomeCards from '../../components/HomeCards/HomeCards.component';

import { CardsGrid, Homepage } from './Home.styles';

function HomePage() {
  return (
    <Homepage>
      <h1>First React Mini-challenge</h1>
      <CardsGrid>
        {data.items.map((item) => {
          return (
            <HomeCards
              key={item.etag}
              videoId={item.id.videoId}
              imgUrl={item.snippet.thumbnails.default.url}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          );
        })}
      </CardsGrid>
    </Homepage>
  );
}

export default HomePage;
