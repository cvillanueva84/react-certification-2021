import React, { useRef, useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';

import AppLayout from '../../components/AppLayout';
import RelatedVideoCard from '../../components/RelatedVideoCard/RelatedVideoCard';
import useYoutubeClient from '../../utils/hooks/useYoutubeClient';
import {
  VideoDetailsView,
  VideoPlayer,
  VideoDetailsContainer,
  RelatedVideosContainer,
} from './VideoDetails.modules';

import './VideoDetails.styles.css';

function VideoDetails(props) {
  const { get } = useYoutubeClient();
  const [videoData, setVideoData] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const youtubePlayer = useRef(null);
  const sectionRef = useRef(null);
  const { videoId } = useParams();

  const getVideos = () => {
    props.history.push('/');
  };

  useEffect(() => {
    const getVideoData = async () => {
      const videoResponse = await get('/videos', {
        id: videoId,
      });
      const relatedVideosResponse = await get('/search', {
        relatedToVideoId: videoId,
      });
      if ('items' in videoResponse.data && 'snippet' in videoResponse.data.items[0]) {
        setVideoData(videoResponse.data.items[0].snippet);
      }
      if (
        'items' in relatedVideosResponse.data &&
        'snippet' in videoResponse.data.items[0]
      ) {
        setRelatedVideos(relatedVideosResponse.data.items);
      }
    };

    getVideoData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={sectionRef}>
      <AppLayout handleSubmit={getVideos} />
      <VideoDetailsView>
        <VideoDetailsContainer>
          <VideoPlayer id="player" ref={youtubePlayer}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="video"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </VideoPlayer>
          <div>
            <div className="video-detail-title">
              <h2>{videoData.title && videoData.title}</h2>
            </div>
            <div className="video-detail-description">
              {videoData.description &&
                videoData.description.split('\n').map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        </VideoDetailsContainer>
        <RelatedVideosContainer>
          {relatedVideos
            .filter((video) => 'snippet' in video)
            .map((video) => {
              return (
                <RelatedVideoCard
                  videoId={video.id.videoId}
                  title={video.snippet && video.snippet.title}
                  imageUrl={video.snippet && video.snippet.thumbnails.default.url}
                  key={video.id.videoId}
                />
              );
            })}
        </RelatedVideosContainer>
      </VideoDetailsView>
    </section>
  );
}

export default withRouter(VideoDetails);
