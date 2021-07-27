import React from 'react';
import './Content.style.css';
import Card from '../../components/Card';
import videos from '../../utils/youtube-videos-mock.json';

const Content = () => {
  return (
    <section className="content">
      <div className="title">
        <h1>Welcome to the Challenge!</h1>
      </div>
      <div className="videos">
        {videos.items.map((video) => {
          return (
            <Card
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Content;
