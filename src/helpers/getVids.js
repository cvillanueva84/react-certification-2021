import { API_KEY } from "../constants"; 

export const getVids = async (categoria) => {
  
  //const key = process.env.REACT_APP_API_KEY;
  //console.log(key);
  const urlYoutube = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&order=relevance&q=${encodeURI(categoria)}&type=video&key=${API_KEY}`;
  const respuesta = await fetch(urlYoutube);
  const { items } = await respuesta.json();

  const videos = items.map((video) => {
    return {
      id: video.etag,
      videoId: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      url: video.snippet.thumbnails.medium.url,
      categoria: categoria
    };
  });

  //console.log(videos);
  return videos;
};
