import React, { useContext, Suspense, lazy } from 'react';
import { SectionContainer, VideoListContainer, override } from './HomePage.styled';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import GridLoader from 'react-spinners/ClipLoader';
const VideoList = lazy(() => import('../../components/VideoList/VideoListComponent'));

const HomePage = () => {
  const { videosState } = useContext(VideoListContext);
  const { posts = [] } = videosState;

  return (
    <SectionContainer>
      <div>
        <h2 style={{ marginLeft: '4rem', marginTop: '2rem' }}>Our videos:</h2>
      </div>
      <Suspense fallback={<GridLoader size={150} css={override} />}>
        <VideoListContainer>
          {posts.map((video) => (
            <VideoList key={video.id.videoId} video={video} />
          ))}
        </VideoListContainer>
      </Suspense>
    </SectionContainer>
  );
};

export default HomePage;
