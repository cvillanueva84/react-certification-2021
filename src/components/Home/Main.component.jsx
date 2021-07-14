import React from 'react';
import mockData from '../../mock/youtube-video-mock.json';
import CardVideo from '../Card/Video.component';
import { Cards, Title } from './Main.style';

export default function MainView() {
  return (
    <div className="main-view">
      <Title className="main-text">Welcome to the Challenge!</Title>
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
    </div>
  );
}
