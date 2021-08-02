import { useState } from 'react';
import YouTube from '../../apis/YouTube';
import { SEARCH_TERM_KEY, DATA_VIDEOS_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const useYouTubeApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const resp = await YouTube.get('/search', {
        params: {
          q: query,
        },
      });
      setData(resp.data);
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
    fetchVideos,
  };
};
export default useYouTubeApi;
