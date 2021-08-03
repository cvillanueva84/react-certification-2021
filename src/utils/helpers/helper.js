import axios from 'axios';
import { YT_API_KEY } from '../constants';

export const youtubeSearchClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: YT_API_KEY,
  },
  headers: {},
});
