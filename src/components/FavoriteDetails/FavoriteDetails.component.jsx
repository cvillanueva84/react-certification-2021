import React, { useContext } from 'react';
import { ReactionBtn, TitleSpan, DescriptionSpan } from './styledComponents';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';
import { useFetch } from '../../utils/hooks/useFetch';
import { useAuth } from '../../providers/Auth/Auth.provider';
import RecommendedVideos from '../RecommendedVideos';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';

const FavoriteDetails = () => {
  const { id } = useParams();
  const { singleVideo } = useFetch(id);
  const { authenticated } = useAuth();
  const { videosState, removeFromFavorites } = useContext(VideoListContext);
  const { favoriteVideos } = videosState;
  return (
    <div className="video-details-container">
      <div className="video-details-selected-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></iframe>
        {singleVideo.length > 0 && (
          <div className="video-details-selected-video__text">
            <div className="title_like_btns">
              <TitleSpan>{singleVideo[0].snippet.title}</TitleSpan>
              {authenticated ? (
                <div className="reaction-btns">
                  <ReactionBtn type="button" onClick={() => removeFromFavorites(id)}>
                    <i className="fas fa-thumbs-down" />
                  </ReactionBtn>
                </div>
              ) : (
                <ReactionBtn
                  type="button"
                  onClick={() =>
                    Swal.fire({
                      title: 'Oops...',
                      text: 'Log In if you want to add this video to your favorites',
                    })
                  }
                >
                  <i className="fas fa-thumbs-up" style={{ marginRight: '1rem' }} />
                  Like
                </ReactionBtn>
              )}
            </div>
            <DescriptionSpan>{singleVideo[0].snippet.description}</DescriptionSpan>
          </div>
        )}
      </div>
      <div className="video-details-similar-videos">
        <RecommendedVideos videos={favoriteVideos} />
      </div>
    </div>
  );
};

export default FavoriteDetails;
