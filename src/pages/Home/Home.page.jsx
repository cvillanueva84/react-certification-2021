import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import CardVideoDisplayer from '../../components/CardVideo/CardVideo.component';

function HomePage({ theme, setTheme }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const URL_MOCK_FILE =
      'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

    const fetchData = async () => {
      try {
        const response = await fetch(URL_MOCK_FILE);
        const json = await response.json();
        setVideos(Object.values(json.items));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SideMenu theme={theme} setTheme={setTheme} />
      <CardVideoDisplayer videos={videos} />
    </>
  );
}

export default HomePage;
