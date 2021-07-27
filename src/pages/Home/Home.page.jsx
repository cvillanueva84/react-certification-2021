import React, { useEffect, useState } from 'react';
import Content from '../../components/Content';
import Card from '../../components/Card';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(
        'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
      );
      res = await res.json();
      if (res.items.length > 0) {
        const cards = res.items.map((item) => {
          return (
            <Card
              key={item.etag}
              image={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          );
        });
        setData(cards);
      }
    };
    getData();
  }, []);

  return <Content>{data}</Content>;
}

export default HomePage;
