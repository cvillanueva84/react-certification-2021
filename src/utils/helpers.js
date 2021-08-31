import axios from 'axios';

export const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const buildQueryParams = (data) => {
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
