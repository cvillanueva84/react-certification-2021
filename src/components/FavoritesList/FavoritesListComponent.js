import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../providers/Theme/Theme.context';
import {
  DescriptionSpan, TitleSpan, VideoCardDivDark, VideoCardDivLight, VideoImageDiv
} from './FavoriteListComponent.styled';
import './FavoritesListComponent.styles.css';

const FavoritesList = () => {
  const videos = JSON.parse(localStorage.getItem('favorite_videos'));
  const { state } = useContext(Context);

  return (
    <div className="favoriteVideos-container">
      {videos.length === 0 || videos === null ? (
        <div className="no-favorites">
          <h2>There are no favorite videos!</h2>
        </div>
      ) : (
        <div className="favoriteVideos-container">
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/favorite-video/${video.id}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {state.isDark ? (
                <VideoCardDivLight>
                  <VideoImageDiv
                    style={{
                      backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderTopRightRadius: '0.4rem',
                      borderTopLeftRadius: '0.4rem',
                    }}
                  ></VideoImageDiv>
                  <TitleSpan>{video.snippet.title}</TitleSpan>
                  <DescriptionSpan>
                    {video.snippet.description.slice(0, 100)
                      ? video.snippet.description.slice(0, 100)
                      : 'watch video...'}
                  </DescriptionSpan>
                </VideoCardDivLight>
              ) : (
                <VideoCardDivDark>
                  <VideoImageDiv
                    style={{
                      backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderTopRightRadius: '0.4rem',
                      borderTopLeftRadius: '0.4rem',
                    }}
                  ></VideoImageDiv>
                  <TitleSpan>{video.snippet.title}</TitleSpan>
                  <DescriptionSpan>
                    {video.snippet.description
                      ? video.snippet.description.slice(0, 100)
                      : 'watch video...'}
                  </DescriptionSpan>
                </VideoCardDivDark>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
