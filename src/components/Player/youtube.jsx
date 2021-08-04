import axios from 'axios';
const KEY = 'AIzaSyAU--7SQb76HbGVaBfVdb1ad9TKm4PrLm8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})