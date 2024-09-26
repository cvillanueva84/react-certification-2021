import React, { useRef, useState, useEffect } from 'react';

import AppLayout from '../../components/AppLayout';
import HomeView from '../../components/HomeView';

import useYoutubeClient from '../../utils/hooks/useYoutubeClient';

import './Home.styles.css';

function HomePage() {
  const { get } = useYoutubeClient();
  const [youtubeVideos, setYoutubeVideos] = useState({});
  const sectionRef = useRef(null);

  const getVideos = async (query) => {
    get('/search', {
      q: query,
    })
      .then((response) => {
        setYoutubeVideos(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    getVideos('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="homepage" ref={sectionRef}>
      <AppLayout handleSubmit={getVideos} />
      <HomeView youtubeData={youtubeVideos} />
    </section>
  );
}

export default HomePage;
