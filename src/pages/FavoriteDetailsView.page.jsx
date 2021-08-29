import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import RelatedVideo from '../components/RelatedVideo';
import styled from 'styled-components';

const FavoriteDetailsView = (props) => {
  const { url, title, description } = props.video;
  const showRelatedVideo  = props.showRelatedVideo;

  return (
    <>
      <div className={props.className}>
        <div style={{ width: '70%' }}>
          <VideoPlayer url={url} title={title} description={description} />
        </div>

        <div style={{ width: '30%', padding: 30 }}>
          {props.favouriteVideos.map((video) => (
            <RelatedVideo
              key={video.url}
              url={video.url}
              picture={video.picture}
              title={video.title}
              description={video.description}
              showRelatedVideo={showRelatedVideo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const StyledFavoriteDetailsView = styled(FavoriteDetailsView)`
  display: flex;
`;

export default StyledFavoriteDetailsView;