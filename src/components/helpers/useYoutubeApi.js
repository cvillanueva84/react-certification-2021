import { useState } from 'react';
import { fetchVideos } from './helper';

const useBookApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearch = async (query) => {
    setLoading(true);
    try {
      const resp = await fetchVideos(query);
      setData(resp.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchSearch,
  };
};

export default useBookApi;
