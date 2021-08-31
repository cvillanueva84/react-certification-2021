import { useState } from 'react';
import { youtubeClient, buildQueryParams } from '../helpers';
import { youtubeApiCredentials } from '../../config';

const useYoutubeApi = () => {
  const [data, setData] = useState({ items: [] });
  const [singleVideo, setSingleVideo] = useState({ items: [] });
  const [relatedVideos, setRelatedVideos] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 10,
        key: youtubeApiCredentials.key,
      });
      const resp = await youtubeClient(`/search?${queryParams}`);
      setData(resp.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleVideo = async (videoId) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        id: videoId,
        part: ['player', 'snippet'],
        key: youtubeApiCredentials.key,
      });
      const resp = await youtubeClient(`/videos?${queryParams}`);
      setSingleVideo(resp.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async (videoId) => {
    setLoading(true);
    try {
      const queryParams = buildQueryParams({
        id: videoId,
        part: 'snippet',
        type: 'video',
        key: youtubeApiCredentials.key,
      });
      const resp = await youtubeClient(`/search?${queryParams}`);
      setRelatedVideos(resp.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    singleVideo,
    relatedVideos,
    loading,
    error,
    fetchVideos,
    fetchSingleVideo,
    fetchRelatedVideos,
  };
};

export default useYoutubeApi;
