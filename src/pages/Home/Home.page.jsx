import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Home/Navbar';
import { FullWidthContainer } from '../../__globalStyles';
import { VideoGrid } from '../../components/Home/VideoGrid';
// import { videoData } from '../../__mock__/videoData';

function HomePage() {
  // const { items } = videoData;
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState([]);

  const searchYouTube = async (q) => {
    let query = '';
    query = encodeURIComponent(q);
    const response = await fetch(
      `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&q=${query}&maxResults=25&key=AIzaSyAOhX3R0u9yahjGtevwS34WiCfQ6kR1YAM`
    );
    const body = await response.json();
    console.log(body);
    // setItems(body);
    return body;
  };
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await searchYouTube(search);
      console.log('res', res);
      setVideos(res.items);
    };
    fetchVideos();
  }, [search]);

  // searchYouTube('arctic monkeys');

  return (
    <>
      <FullWidthContainer>
        <Navbar setSearch={setSearch} />
        <VideoGrid items={videos} />
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
