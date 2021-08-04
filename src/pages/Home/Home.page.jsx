import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { Homepage, InputSearch } from './Home.styled';

import useYoutubeApi from '../../components/helpers/useYoutubeApi';

function HomePage() {
  const { data, loading, error, fetchSearch } = useYoutubeApi();
  const [value, setValue] = useState('wizeline');

  useEffect(() => {
    if (data.length === 0) {
      fetchSearch(value);
    }
    if (error !== null) {
      console.log(error);
    }
  }, [value, data, fetchSearch, error]);

  const enterPressed = async (event) => {
    fetchSearch(value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Homepage>
      <Header enterPressed={enterPressed}>
        <InputSearch
          placeholder="Search..."
          type="text"
          value={value}
          onChange={handleChange}
        />
      </Header>
      <h2>Welcome to the Challenge!</h2>
      {!loading && <Content data={data} />}
    </Homepage>
  );
}

export default HomePage;
