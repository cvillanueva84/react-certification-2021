import axios from 'axios';
const KEY = 'AIzaSyACcAkV07ihRRybdSU6WNdOJF__uOQFEEY';
//AIzaSyACcAkV07ihRRybdSU6WNdOJF__uOQFEEY
//AIzaSyAhZb6d7g8UiBbriOBoIQRyQVoGjES_KIw
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});
