import React, { useContext } from 'react';
import './FavoritesList.styles.css';
import Context from '../../providers/Theme/Theme.provider';
import { Link } from 'react-router-dom';
import {
  VideoCardDivLight,
  VideoCardDivDark,
  VideoImageDiv,
  TitleSpan,
  DescriptionSpan,
} from './styledComponents';

const FavoritesList = () => {
  const videos = JSON.parse(localStorage.getItem('favorite_videos'));
  const { state } = useContext(Context);

  return (
    <div className="favoritVideos-container">
      {videos.map((video) => (
        <Link
          to={`favorite-list/video/`}
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
                {video.snippet.description ? video.snippet.description : 'watch video...'}
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
  );
};

export default FavoritesList;
