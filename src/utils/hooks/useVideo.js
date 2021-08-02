import { useState, useEffect } from 'react';

const API_URL = 'https://youtube.googleapis.com/youtube/v3/search?';
const PART = 'snippet';
const MAX_RESULTS = 15;
const TYPE = 'video';
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function useVideo(params) {
  const [videos, setVideos] = useState([]);
  const { relatedId, searchQuery } = params;

  useEffect(() => {
    let url = `${API_URL}part=${PART}&maxResults=${MAX_RESULTS}`;

    if (relatedId) {
      url += `&relatedToVideoId=${relatedId}`;
    }

    if (searchQuery) {
      url += `&q=${searchQuery}`;
    }

    url += `&type=${TYPE}&key=${YOUTUBE_API_KEY}`;

    const getVideos = async () => {
      try {
        const response = await fetch(url);
        const resultItem = await response.json();
        const list = resultItem.items;
        setVideos(list);
      } catch (error) {
        console.error("That's too bad: ", error);
      }
    };

    getVideos();
  }, [relatedId, searchQuery]);

  return { videos };
}

export default useVideo;
