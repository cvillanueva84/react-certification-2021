import axios from 'axios';
require('dotenv').config();
const KEY = process.env.KEY_YT;
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});
