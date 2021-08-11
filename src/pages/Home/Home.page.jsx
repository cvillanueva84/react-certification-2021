import React, { useContext, Suspense, lazy } from 'react';
import './Home.styles.css';
import { SectionContainer, VideoListContainer, override } from './styledComponents';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import GridLoader from 'react-spinners/ClipLoader';
const VideoList = lazy(() => import('../../components/VideoList/VideoList.component'));

const HomePage = () => {
  const { state } = useContext(VideoListContext);
  const { posts = [] } = state;

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
