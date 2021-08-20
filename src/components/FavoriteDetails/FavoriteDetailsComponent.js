import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { useFetch } from '../../utils/hooks/useFetch';
import RecommendedVideos from '../RecommendedVideos';
import { DescriptionSpan, Iframe, ReactionBtn, ReactionBtnPosition, ReactionBtnsContainer, SelectedVideoTextContainer, SimilarVideosContainer, TitleSpan, VideoDetailsContainer, VideoDetailsSelectedVideo } from './FavoriteDetailsComponent.styled';

const FavoriteDetails = () => {
  const { id } = useParams();
  const { singleVideo } = useFetch(id);
  const { authenticated } = useAuth();
  const { videosState, removeFromFavorites } = useContext(VideoListContext);
  const { favoriteVideos } = videosState;
  return (
    <VideoDetailsContainer>
      <VideoDetailsSelectedVideo>
        <Iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></Iframe>
        {singleVideo.length > 0 && (
          <SelectedVideoTextContainer>
            <ReactionBtnsContainer>
              <TitleSpan>{singleVideo[0].snippet.title}</TitleSpan>
              {authenticated ? (
                <ReactionBtnPosition>
                  <ReactionBtn type="button" onClick={() => removeFromFavorites(id)}>
                    <i className="fas fa-thumbs-down" />
                  </ReactionBtn>
                </ReactionBtnPosition>
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
            </ReactionBtnsContainer>
            <DescriptionSpan>{singleVideo[0].snippet.description}</DescriptionSpan>
          </SelectedVideoTextContainer>
        )}
      </VideoDetailsSelectedVideo>
      <SimilarVideosContainer>
        <RecommendedVideos videos={favoriteVideos} />
      </SimilarVideosContainer>
    </VideoDetailsContainer>
  );
};

export default FavoriteDetails;
