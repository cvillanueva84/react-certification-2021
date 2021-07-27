import React from 'react';
import ListVideos from '../../components/Videos/ListVideos';
import { Title, TitleWrapper } from './Home.styles';
import { videosData } from '../../mock/youtube-videos-mock';

const videos = videosData.items.filter((item) => item.id.kind === 'youtube#video');

function HomePage() {
  return (
    <section>
      <TitleWrapper>
        <Title>Welcome to the Challenge!</Title>
      </TitleWrapper>
      <ListVideos videos={videos} />
    </section>
  );
}

export default HomePage;
