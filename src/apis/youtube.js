import axios from 'axios';
const KEY = 'AIzaSyAhZb6d7g8UiBbriOBoIQRyQVoGjES_KIw';
//AIzaSyACcAkV07ihRRybdSU6WNdOJF__uOQFEEY
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
