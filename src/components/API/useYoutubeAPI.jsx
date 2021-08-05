import { useState } from 'react';
import { youtubeClient, buildQueryParams } from '../../helpers';

const useYoutubeAPI = () => {
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        q: query,
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_KEY,
        maxResults: 20,
      });
      const resp = await youtubeClient(`/search?${queryParams}`);
      setVideos(resp.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const fetchRelatedVideos = async (id) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        relatedToVideoId: id,
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_KEY,
        maxResults: 20,
        type: 'video',
      });
      const resp = await youtubeClient(`/search?${queryParams}`);
      setVideos(resp.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    videos,
    loading,
    error,
    fetchVideos,
    fetchRelatedVideos,
  };
};

export default useYoutubeAPI;
