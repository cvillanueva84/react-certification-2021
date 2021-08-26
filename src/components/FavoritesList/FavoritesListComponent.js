import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../providers/Theme/Theme.context';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import {
  DescriptionSpan, FavoriteListContainer, FavoriteListEach, NoFavoritesDiv, TitleSpan, VideoCardDivDark, VideoCardDivLight, VideoImageDiv
} from './FavoriteListComponent.styled';

const FavoritesList = () => {
  const { videosState } = useContext(VideoListContext)
  const { favoriteVideos } = videosState
  const { state } = useContext(Context);

  return (
    <FavoriteListContainer >
      {favoriteVideos.length === 0 || favoriteVideos === null ? (
        <NoFavoritesDiv>
          <h2>There are no favorite videos!</h2>
        </NoFavoritesDiv>
      ) : (
        <FavoriteListEach>
          {favoriteVideos.map((video) => (
            <Link
              key={video.etag}
              to={`/favorite-video/${video.id.videoId}`}
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
                    {video.snippet.description
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
        </FavoriteListEach>
      )}
    </FavoriteListContainer>
  );
};

export default FavoritesList;
