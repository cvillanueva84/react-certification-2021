import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DivTitle, Container, Fakegrid } from './VideoList.styled';
import Card from '../Card/Card';

const baseURL =
  'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      const {
        data: { items },
      } = await axios.get(baseURL);
      const aux = [...items];
      aux.shift();
      setVideos(aux);
      // console.log(data.items.map((el) => el.snippet.description));
    }
    getVideos();
  }, []);

  return (
    <>
      <DivTitle>
        <h2>Welcome to the Challenge!</h2>
      </DivTitle>
      <Container>
        <Fakegrid>
          {videos.map((video) => (
            <Card
              title={video.snippet.title}
              description={video.snippet.description}
              link={video.snippet.thumbnails.high.url}
              key={video.snippet.publishedAt}
            />
          ))}
        </Fakegrid>
      </Container>
    </>
  );
};

export default VideoList;
