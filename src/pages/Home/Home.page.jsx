import React, { useState, useEffect } from 'react';

import VideoPreviewCard from '../../components/VideoPreviewCard';

import './Home.styles.css';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
          console.log(result.items);
        },
        () => {
          setIsLoaded(true);
        }
      );
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="homepage">
      {items.map((item) => (
        <VideoPreviewCard
          key={item.etag}
          thumbnailURL={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          description={item.snippet.description}
          videoID={item.id.videoId}
        />
      ))}
    </section>
  );
}

export default HomePage;
