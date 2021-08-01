import axios from 'axios';

const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyAYqG4dkr8FeUIXfKTTqqrroxJo0tQENGM',
  },
});

export const fetchVideos = (searchQuery) => {
  try {
    const result = youtubeClient.get('/search', {
      params: { q: searchQuery },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
