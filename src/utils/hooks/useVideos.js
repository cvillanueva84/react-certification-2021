import { useState, useEffect } from 'react';
import Data from '../../utils/related-videos.json'

const API_URL =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20';
const API_KEY = 'AIzaSyBaJpEB63-mbuXIkIAL7_qbv7gJNoHCHHk';
// GET https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key={YOUR_API_KEY}

function useVideos() {
  const [query, setQuery] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    async function fetchData() {
      //For test purposes
      if (true) {
        setVideos(Data);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}&key=${API_KEY}${query ? '&q=$' + query : ''}`);
        const data = await response.json();
        console.log(data);
        setVideos(data);

      } catch (error) {
        console.error('Bad data: ', error);
        
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return [{ query, videos, loading }, setQuery];
}

export { useVideos };
