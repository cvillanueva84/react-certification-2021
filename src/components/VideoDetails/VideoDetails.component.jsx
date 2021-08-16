import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../utils/hooks/useFetch';
import './VideoDetails.styles.css';
import { TitleSpan, DescriptionSpan } from './styledComponents';
import RecommendedVideos from '../RecommendedVideos';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';

const VideoDetails = () => {
  const { id } = useParams();
  const { singleVideo } = useFetch(id);
  const { addToFavorites } = useContext(VideoListContext);

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
              <div className="reaction-btns">
                <button type="button" onClick={() => addToFavorites(singleVideo[0])}>
                  <i className="fas fa-thumbs-up" />
                  Like
                </button>

                <button type="button">
                  <i className="fas fa-thumbs-down"></i>
                  Dislike
                </button>
              </div>
            </div>
            <DescriptionSpan>{singleVideo[0].snippet.description}</DescriptionSpan>
          </div>
        )}
      </div>
      <div className="video-details-similar-videos">
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default VideoDetails;
