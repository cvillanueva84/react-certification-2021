import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import RecommendedVideos from '../RecommendedVideos';
import { DescriptionSpan, Iframe, ReactionBtn, ReactionBtnPosition, ReactionBtnsContainer, SelectedVideoTextContainer, SimilarVideosContainer, TitleSpan, VideoDetailsContainer, VideoDetailsSelectedVideo } from './FavoriteDetailsComponent.styled';

const FavoriteDetails = () => {
  const { id } = useParams();
  const { authenticated } = useAuth();
  const { videosState, removeFromFavorites } = useContext(VideoListContext);
  const { favoriteVideos } = videosState;
  const [singleVideo, setSingleVideo] = useState()
  
  useEffect(() => {
    let obj = favoriteVideos.find(eachVideo => eachVideo.id.videoId === id)
      setSingleVideo(obj)
    }, [id, favoriteVideos])
    

  return (
    <VideoDetailsContainer>
      <VideoDetailsSelectedVideo>
        <Iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></Iframe>
        {singleVideo && (
          <SelectedVideoTextContainer>
            <ReactionBtnsContainer>
              <TitleSpan>{singleVideo.snippet.title}</TitleSpan>
              {authenticated && (
                <ReactionBtnPosition>
                  <ReactionBtn type="button" onClick={() => removeFromFavorites(id)}>
                    <i className="fas fa-thumbs-down" />
                  </ReactionBtn>
                </ReactionBtnPosition>
              ) }
            </ReactionBtnsContainer>
            <DescriptionSpan>{singleVideo.snippet.description}</DescriptionSpan>
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
