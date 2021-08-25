import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import RecommendedVideos from '../RecommendedVideos';
import { VideoDetailsContainer, DescriptionSpan, ReactionBtn, TitleSpan, VideoDetailsSelectedVideo, SelectedVideoTextContainer, ReactionBtnsContainer, ReactionBtnPosition, SimilarVideosContainer, Iframe } from './VideoDetailsComponent.styled';

const VideoDetails = () => {
  const { id } = useParams();
  const { authenticated } = useAuth();
  const { addToFavorites, videosState, removeFromFavorites } = useContext(VideoListContext);
  const { posts } = videosState;
  const { favoriteVideos } = videosState;
  const [singleVideo, setSingleVideo] = useState()

  const checkIfVideoIsFavorite = (id, video) => {
    if (favoriteVideos.some((eachVideo) => eachVideo.id === id)) {
      return;
    } else {
      addToFavorites(video);
    }
  };
  
  useEffect(() => {
  let obj = posts.find(eachVideo => eachVideo.id.videoId === id)
    setSingleVideo(obj)
  }, [id, posts])
  
  return (
    <VideoDetailsContainer >
      <VideoDetailsSelectedVideo >
        <Iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allowFullScreen
          title="test"
        ></Iframe>
        {singleVideo && (
          <SelectedVideoTextContainer>
            <ReactionBtnsContainer >
              <TitleSpan>{singleVideo.snippet.title}</TitleSpan>
              {authenticated ? (
                <ReactionBtnPosition>
                  {favoriteVideos.some((eachVid) => eachVid.id === id) ? (
                    <ReactionBtn type="button" onClick={() => removeFromFavorites(id)}>
                      <i className="fas fa-thumbs-down" />
                    </ReactionBtn>
                  ) : (
                    <ReactionBtn
                      type="button"
                      onClick={() => checkIfVideoIsFavorite(id, singleVideo)}
                    >
                      <i className="fas fa-thumbs-up" />
                    </ReactionBtn>
                  )}
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
            <DescriptionSpan>{singleVideo.snippet.description}</DescriptionSpan>
          </SelectedVideoTextContainer>
        )}
      </VideoDetailsSelectedVideo>
      <SimilarVideosContainer>
        <RecommendedVideos videos={posts} />
      </SimilarVideosContainer>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;
