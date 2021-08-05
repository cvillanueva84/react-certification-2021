import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/videoPlayer.component';
import useYoutubeAPI from '../../components/API/useYoutubeAPI';
import CardVideo from '../../components/Card/Card.component';
import { Cards } from '../../components/Home/Main.style';

function VideoPage() {
  const { id, title, description } = useParams();
  const { videos, loading, fetchRelatedVideos } = useYoutubeAPI();
  useEffect(() => {
    fetchRelatedVideos(id);
  }, [id]);
  return (
    <section>
      {id !== undefined && <VideoPlayer name={title} description={description} id={id} />}
      {!loading && videos !== undefined && (
        <Cards>
          {videos.items.map((video) => (
            <CardVideo
              id={video.id.videoId}
              key={video.etag}
              name={video.snippet.title}
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
            />
          ))}
        </Cards>
      )}
    </section>
  );
}

export default VideoPage;
