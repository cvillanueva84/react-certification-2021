import React from 'react';
import Header from '../../components/Header';
import { HeaderTitle, HomeCardsContainer } from './HomeComponents';

import VideoCard from '../../components/ui/VideoCard';
import dataMock from '../../utils/mocks/youtube-videos-mock.json';

function Home() {
  return (
    <div>
      <Header />
      <HeaderTitle>Welcome to the Challenge!</HeaderTitle>
      <HomeCardsContainer>
        {dataMock.items.map(({ etag, snippet }) => (
          <VideoCard
            key={etag}
            title={snippet.title}
            imgUrl={snippet.thumbnails.medium.url}
            description={snippet.description}
          />
        ))}
      </HomeCardsContainer>
    </div>
  );
}

export default Home;
