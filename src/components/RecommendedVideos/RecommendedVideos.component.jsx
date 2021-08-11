import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import './RecommendedVideos.styles.css';
import { TitleSpan } from './styledComponents';
const RecommendedVideos = () => {
  const { state } = useContext(VideoListContext);
  const { posts } = state;
  const recommendedVideos = posts.slice(0, 8);
  return (
    <>
      <div className="recommended-video__container">
        {recommendedVideos.map((video) => (
          <Link
            to={`/video/${video.id.videoId}`}
            style={{ textDecoration: 'none', color: '#000' }}
            key={video.id.videoId}
          >
            <div className="recommended-video__card">
              <div className="recommended-video__card-img">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  style={{ width: '100%' }}
                  alt={video.snippet.title}
                />
              </div>
              <div className="recommended-video__card-text">
                <TitleSpan>{video.snippet.title}</TitleSpan>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecommendedVideos;
