import { useState } from 'react';
import { youtubeSearchClient } from '../helpers/helper';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async (queryType = 'mostPopular', query = '') => {
    setLoading(true);
    try {
      let response;
      if (queryType === 'mostPopular') {
        response = await youtubeSearchClient('/videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 20,
            pageToken: '',
          },
        });
      } else if (queryType === 'getByName' && query.length > 0) {
        response = await youtubeSearchClient('/search', {
          params: {
            part: 'snippet',
            type: 'video',
            maxResults: 20,
            q: query,
          },
        });
      } else if (queryType === 'getById') {
        response = await youtubeSearchClient('/videos', {
          params: {
            part: 'snippet,statistics',
            id: query,
          },
        });
      } else if (queryType === 'getRelatedVideos') {
        response = await youtubeSearchClient('/search', {
          params: {
            part: 'snippet',
            relatedToVideoId: query,
            maxResults: 20,
            type: 'video',
          },
        });
      }
      setData(response.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchVideos };
};
