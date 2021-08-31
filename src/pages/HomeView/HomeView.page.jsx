import React, { useState } from 'react';

import NavBar from '../../components/NavBar';
import VideosContainer from '../../components/VideosContainer';
// import { data } from '../../data/youtube-videos-mock';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import useDebounce from '../../utils/hooks/useDebounce';

const HomeView = () => {
  const [inputValue, setInputValue] = useState('Wizeline');
  const { data, fetchVideos } = useYoutubeApi();

  useDebounce(() => {
    fetchVideos(inputValue);
  }, [inputValue]);

  return (
    <>
      <NavBar setInputValue={setInputValue} inputValue={inputValue} />
      <h2 className="content-title">Welcome to the Challenge!</h2>
      <VideosContainer data={data} />
    </>
  );
};

export default HomeView;
