import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import RelatedVideo from '../components/RelatedVideo';
import styled from 'styled-components';

const DetailsView = (props) => {
  const { url, title, description } = props.video;
  return (
    <>
      <div className={props.className}>
        <div style={{ width: '70%' }}>
          <VideoPlayer url={url} title={title} description={description} />
        </div>

        <div style={{ width: '30%', padding: 30 }}>
          {props.relatedVideos.map((video) => (
            <RelatedVideo
              key={video.id.videoId}
              picture={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              description={video.snippet.channelTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const StyledDetailsView = styled(DetailsView)`
  display: flex;
`;

export default StyledDetailsView;
