import React, { useEffect } from 'react';
import { Container } from '../../Global.styles';
import CardVideo from '../Card/Card.component';
import { Cards, Title } from './Main.style';
import useYoutubeAPI from '../API/useYoutubeAPI';
import {useAppContext} from "../Layout/Layout.component"

export default function MainView() {
  const {input} = useAppContext();
  const { videos, loading, error, fetchVideos } = useYoutubeAPI();
  useEffect(() =>{
    fetchVideos(input);
    console.log(error);
  });
  return (
    <Container>
      <Title>{input}</Title>
      <Cards>
      {!loading && (
        <Cards>
          {videos.items.map((video) => (
             <CardVideo
             key={video.etag}
             name={video.snippet.title}
             description={video.snippet.description}
             image={video.snippet.thumbnails.high.url}
           />
          ))}
        </Cards>
      )}
      </Cards>
    </Container>
  );
}
