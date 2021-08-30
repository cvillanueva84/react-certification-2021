import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../providers/Theme/Theme.context';
import {
  DescriptionSpan, TitleSpan, VideoCardDivDark, VideoCardDivLight, VideoImageDiv
} from './VideoListComponent.styled';

const VideoList = ({ video }) => {
  const { snippet } = video;
  const { thumbnails, title, description } = snippet;
  const { id } = video;
  const { videoId } = id;
  const { state } = useContext(Context);
  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: 'var(--black)' }}>
      {state.isDark ? (
        <VideoCardDivLight>
          <VideoImageDiv
            style={{
              backgroundImage: `url(${thumbnails.medium.url})`
            }}
          ></VideoImageDiv>
          <TitleSpan>{title}</TitleSpan>
          <DescriptionSpan>
            {description ? description : 'watch video...'}
          </DescriptionSpan>
        </VideoCardDivLight>
      ) : (
        <VideoCardDivDark>
          <VideoImageDiv
            style={{
              backgroundImage: `url(${thumbnails.medium.url})`
            }}
          ></VideoImageDiv>
          <TitleSpan>{title}</TitleSpan>
          <DescriptionSpan>
            {description ? description : 'watch video...'}
          </DescriptionSpan>
        </VideoCardDivDark>
      )}
    </Link>
  );
};

export default VideoList;
