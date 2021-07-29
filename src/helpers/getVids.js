export const getVids = async (categoria) => {
  
  //const key = process.env.API_KEY;
  const urlYoutube = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&order=relevance&key=AIzaSyDowbC2QxBtmWzCjTFGeVoTzpjXkCv8WXY&q=${encodeURI(categoria)}`;
  //const url = `https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json`;
  const respuesta = await fetch(urlYoutube);
  const { items } = await respuesta.json();
  //console.log(items);

  const videos = items.map((video) => {
    return {
      id: video.etag,
      title: video.snippet.title,
      description: video.snippet.description,
      url: video.snippet.thumbnails.medium.url,
    };
  });

  //console.log(videos);
  return videos;
};
