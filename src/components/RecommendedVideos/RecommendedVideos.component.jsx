import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RecommendedVideos.styles.css';
import { TitleSpan } from './styledComponents';

const RecommendedVideos = ({ videos }) => {
  const recommendedVideos = videos.slice(0, 15);
  const { pathname } = useLocation();
  const currentPath = pathname.split('/');
  return (
    <>
      <div className="recommended-video__container">
        {recommendedVideos.map((video) => (
          <Link
            to={
              currentPath[1] === 'video'
                ? `/video/${video.id.videoId}`
                : `/favorite-video/${video.id}`
            }
            style={{ textDecoration: 'none', color: '#000' }}
            key={currentPath[1] === 'video' ? video.id.videoId : video.id}
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
            <hr style={{ width: '80%', margin: '0 auto', color: '#060B26' }} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecommendedVideos;
