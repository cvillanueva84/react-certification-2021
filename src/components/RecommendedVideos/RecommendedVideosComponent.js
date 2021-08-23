import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TitleSpan, RecommendedVideoCard, RecommendedVideoImg, RecommendedVideoText } from './RecommendedVideosComponent.styled';

const RecommendedVideos = ({ videos }) => {
  const recommendedVideos = videos.slice(0, 15);
  const { pathname } = useLocation();
  const currentPath = pathname.split('/');
  return (
    <>
      <div>
        {recommendedVideos.map((video) => (
          <Link
            to={
              currentPath[1] === 'video'
                ? `/video/${video.id.videoId}`
                : `/favorite-video/${video.id}`
            }
            style={{ textDecoration: 'none', color: 'var(--black)' }}
            key={currentPath[1] === 'video' ? video.id.videoId : video.id}
          >
            <RecommendedVideoCard>
              <RecommendedVideoImg>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  style={{ width: '100%' }}
                  alt={video.snippet.title}
                />
              </RecommendedVideoImg>
              <RecommendedVideoText >
                <TitleSpan>{video.snippet.title}</TitleSpan>
              </RecommendedVideoText>
            </RecommendedVideoCard>
            <hr style={{ width: '80%', margin: '0 auto', color: 'var(--main-blue)' }} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecommendedVideos;
