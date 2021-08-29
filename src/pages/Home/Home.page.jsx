import React from 'react';
// Styles
import './Home.styles.css';
// Styled components
import { VideoContent, Title } from './Styles';
// Componentes
import VideoCard from '../../components/VideoCard';

import { useGlobalProvider } from '../../store/global.provider';

export default function HomePage() {
  const {
    state: { fetchingVideo, videoList, error, favoriteVideos },
  } = useGlobalProvider();

  // TODO la informacion de videos viene desde context (que manejo como un reducer)
  /* Existe un action que mandar a llamar a la api de youtube
    regresa videos, loading y error
  */

  if (error) return <div>Network error</div>;
  if (fetchingVideo) return <div>loading...</div>;

  return (
    <>
      <section>
        <Title>
          <h3>Welcome to Wizeline</h3>
        </Title>
        <VideoContent>
          {videoList?.items &&
            videoList.items.map((item) => {
              const videoId = item?.id?.videoId;
              const { title, description, channelTitle } = item?.snippet;
              const { url } = item?.snippet.thumbnails.medium;
              const data = { title, description, videoId, channelTitle, url };
              return <VideoCard key={videoId} data={{ ...data, favoriteVideos }} />;
            })}
        </VideoContent>
      </section>
    </>
  );
}
