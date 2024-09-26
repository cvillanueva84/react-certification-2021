import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/';

function useYoutubeClient() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const get = (url, params) => {
    return axios.get(url, {
      params: {
        ...params,
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key: API_KEY,
      },
    });
  };

  return { get };
}

export default useYoutubeClient;
