import { useEffect, useState } from 'react';
import { youtubeSearchClient } from '../helpers/helper';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      // const queryParams = buildQueryParams({
      //   title: query,
      // });
      // console.log(queryParams);
      const response = await youtubeSearchClient.get(query);
      console.log(response);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  });

  return { data, loading, error, fetchVideos };
};
