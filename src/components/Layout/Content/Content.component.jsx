import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Link } from 'react-router-dom';
import VideoComponent from '../Video/Video.component';

// Styles
import ContentWrapper from './Content.styles';

function ContentComponent({ videos }) {
  return (
    <ContentWrapper>
      {videos.map((item) => (
        <Link to={`/${item.id.videoId}`} key={item.etag}>
          <VideoComponent
            description={item.snippet.description}
            title={item.snippet.title}
            url={item.snippet.thumbnails.medium.url}
          />
        </Link>
      ))}
    </ContentWrapper>
  );
}

ContentComponent.propTypes = {
  videos: PropTypes.shape([]),
};
ContentComponent.defaultProps = {
  videos: [],
};

export default ContentComponent;
