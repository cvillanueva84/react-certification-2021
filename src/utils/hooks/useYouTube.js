import { useState, useEffect } from 'react';
import YouTube from '../../apis/YouTube';
import { SEARCH_TERM_KEY } from '../constants';
import { storage } from '../storage';
function useYouTube() {
  const [dataVideos, setDataVideos] = useState({ items: [] });
  useEffect(() => {
    async function findVideos() {
      try {
        const response = await YouTube.get('/search', {
          params: {
            q: storage.get(SEARCH_TERM_KEY),
          },
        });
        setDataVideos(response.data);
      } catch (error) {
        console.error('No videos: ', error);
      }
    }

    findVideos();
  }, []);

  return dataVideos;
}

export { useYouTube };
