import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Components
import VideoRelated from '../../components/Layout/Video/VideoRelated.component';
import VideoFullComponent from '../../components/Layout/Video/VideoFull.component';

// Hooks
import useVideoId from '../../hooks/useVideoId';
import useRelatedVideos from '../../hooks/useRelatedVideos';

// Styles
import { RelatedList, VideoDetailWrapper } from './VideoDetail.styles';

function VideoDetailPage() {
  const { id } = useParams();
  const { video, loading, error } = useVideoId(id);
  const { videos, loadingRelated, errorRelated } = useRelatedVideos(id);

  return (
    <VideoDetailWrapper>
      {video.map((item) => (
        <VideoFullComponent
          description={item.snippet.description}
          error={error}
          key={item.etag}
          loading={loading}
          title={item.snippet.title}
          url={item.id}
        />
      ))}
      <RelatedList>
        {videos.map((item) => (
          <Link to={`/${item.id.videoId}`} key={item.etag}>
            <VideoRelated
              error={errorRelated}
              loading={loadingRelated}
              title={item.snippet.title}
              url={item.snippet.thumbnails.default.url}
            />
          </Link>
        ))}
      </RelatedList>
    </VideoDetailWrapper>
  );
}

export default VideoDetailPage;
