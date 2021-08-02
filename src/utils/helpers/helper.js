import axios from 'axios';
import { YT_API_KEY } from '../constants';

export const youtubeSearchClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: YT_API_KEY,
  },
  headers: {},
});

export const buildQueryParams = (data) => {
  console.log(YT_API_KEY);
  console.log(data);
  return Object.entries(data)
    .map(([key, value]) => {
      let finalValue = value;
      if (Array.isArray(value)) {
        finalValue = value.join(',');
      }
      return `${key}=${encodeURI(finalValue)}`;
    })
    .join('&');
};
