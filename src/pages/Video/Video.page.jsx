import React, { useEffect } from 'react';
import styled from 'styled-components';

import VideoMain from '../../components/VideoMain';
import RelatedVideos from '../../components/RelatedVideos';

import { useVideos } from '../../utils/hooks/useVideos';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 78vh;
  /* height: 85.5vh; */
  overflow-y: auto;
  margin: 0 auto;
  @media (max-width: 1068px) {
    height: 91vh;
  }
  justify-content: center;
  @media (max-width: 629px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function VideoHome(props) {

  const [{ isLoading, isError, data }, changeUrl] = useVideos();

  useEffect(() => {
    props.changeUrl(`&id=${props.match.params.id}`);
  }, [props.match.params.id])
  useEffect(() => {
    changeUrl(`&relatedToVideoId=${props.match.params.id}`)
  }, [changeUrl, props.match.params.id])

  return (
    <Container>
      {
        props.videos?.items &&
        <VideoMain id={props.match.params.id} video={props.videos?.items[0]} isLoading={isLoading} isError={isError} />
      }
      {
        data?.items &&
        <RelatedVideos id={props.match.params.id} videos={data} />
      }
    </Container>
  );
}

export default VideoHome;
