import React from 'react';
import { Container } from '../../Global.styles';
import mockData from '../../mock/youtube-video-mock.json';
import CardVideo from '../Card/Card.component';
import { Cards, Title } from './Main.style';

export default function MainView() {
  return (
    <Container>
      <Title>Welcome to the Challenge!</Title>
      <Cards>
        {mockData.items.map((data) => {
          return (
            <CardVideo
              key={data.etag}
              name={data.snippet.title}
              description={data.snippet.description}
              image={data.snippet.thumbnails.high.url}
            />
          );
        })}
      </Cards>
    </Container>
  );
}