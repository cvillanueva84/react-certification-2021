import React from 'react';
import { Link } from 'react-router-dom';
import {
  VideoCardDiv,
  VideoImageDiv,
  TitleSpan,
  DescriptionSpan,
} from './styledComponents';

const VideoList = ({ video }) => {
  const { snippet } = video;
  const { thumbnails, title, description } = snippet;
  const { id } = video;
  const { videoId } = id;
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: '#000' }}>
      <VideoCardDiv>
        <VideoImageDiv
          style={{
            backgroundImage: `url(${thumbnails.medium.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderTopRightRadius: '0.4rem',
            borderTopLeftRadius: '0.4rem',
          }}
        ></VideoImageDiv>
        <TitleSpan>{title}</TitleSpan>
        <DescriptionSpan>{description ? description : 'watch video...'}</DescriptionSpan>
      </VideoCardDiv>
    </Link>
  );
};

export default VideoList;
