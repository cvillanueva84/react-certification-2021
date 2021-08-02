import axios from 'axios';

const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_API_KEY,
  },
});

export const fetchVideos = (searchQuery) => {
  try {
    const result = youtubeClient.get('/search', {
      params: { q: searchQuery, type: 'video', maxResults: 10 },
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVideo = (videoId) => {
  try {
    const result = youtubeClient.get('/videos', {
      params: { id: videoId },
    });
    return result;
  } catch (error) {
    return null;
  }
};

export const getRelationVideoList = (videoId) => {
  try {
    const result = youtubeClient.get('/search', {
      params: { type: 'video', relatedToVideoId: videoId },
    });
    return result;
  } catch (error) {
    return null;
  }
};
