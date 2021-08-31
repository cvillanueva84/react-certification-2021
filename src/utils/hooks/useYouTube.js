import { useState, useEffect } from 'react';
import YouTube from '../../apis/YouTube';
function useYouTube(searchTerm) {
  const [dataVideos, setDataVideos] = useState({ items: [] });
  useEffect(() => {
    async function findVideos() {
      try {
        const response = await YouTube.get('/search', {
          params: {
            q: searchTerm,
          },
        });
        setDataVideos(response.data);
      } catch (error) {
        console.error('No videos: ', error);
      }
    }

    findVideos();
  }, [searchTerm]);

  return dataVideos;
}

export { useYouTube };
