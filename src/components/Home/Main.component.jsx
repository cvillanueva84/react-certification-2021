import React, { useEffect } from 'react';
import { Container } from '../../Global.styles';
import CardVideo from '../Card/Card.component';
import { Cards, Title } from './Main.style';
import useYoutubeAPI from '../API/useYoutubeAPI';
import { useAppContext } from '../Layout/Layout.component';

export default function MainView() {
  const { input } = useAppContext();
  const { videos, loading, fetchVideos } = useYoutubeAPI();
  useEffect(() => {
    fetchVideos(input);
  }, [input]);
  return (
    <Container>
      <Title>Welcome to the challenge</Title>
      {!loading && videos !== undefined && (
        <Cards>
          {videos.items.map((video) => (
            <CardVideo
              id={video.id.videoId}
              key={video.etag}
              name={video.snippet.title}
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
            />
          ))}
        </Cards>
      )}
    </Container>
  );
}
