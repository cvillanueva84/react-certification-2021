import React, { useContext, useEffect, useState } from 'react';
import VideoContext from '../Context/VideoContext';
import VideoFavoriteContext from '../Context/VideoFavorite';
import LinkVideo from '../Link.element';
import {
  CardVideoDisplayerContainer,
  CardVideoContainer,
  CardVideoImage,
  CardVideoBottom,
} from './CardVideo.elements';

export function CardVideo({ video, id }) {
  const urlVideo = `/watch?v=${id}`;

  const { setVideo } = useContext(VideoContext);

  const handleClick = () => {
    setVideo(video);
  };

  return (
    <>
      <LinkVideo to={urlVideo} onClick={handleClick}>
        <CardVideoContainer>
          <CardVideoImage
            src={
              video.snippet.thumbnails.high.url
                ? video.snippet.thumbnails.high.url
                : video.snippet.thumbnails.default.url
            }
          />
          <CardVideoBottom
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </CardVideoContainer>
      </LinkVideo>
    </>
  );
}

export function CardVideoFavorite({ video, id }) {
  const urlVideo = `favorites/${id}`;

  const { setVideoFavorite } = useContext(VideoFavoriteContext);

  const handleClick = () => {
    setVideoFavorite(id);
  };

  return (
    <>
      <LinkVideo to={urlVideo} onClick={handleClick}>
        <CardVideoContainer>
          <CardVideoImage
            src={
              video.snippet.thumbnails.high.url
                ? video.snippet.thumbnails.high.url
                : video.snippet.thumbnails.default.url
            }
          />
          <CardVideoBottom
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </CardVideoContainer>
      </LinkVideo>
    </>
  );
}

function CardVideoDisplayer({ videos }) {
  const [listVideos, setListVideo] = useState();

  useEffect(() => {
    if (videos) {
      setListVideo(
        videos.map((video) => (
          <CardVideo id={video.id.videoId} key={video.etag} video={video} />
        ))
      );
    }
  }, [videos]);

  return (
    <>
      <CardVideoDisplayerContainer>{listVideos}</CardVideoDisplayerContainer>
    </>
  );
}

export default CardVideoDisplayer;
