import React from 'react';
import { VideoListContainer, VideoListTitle, Videos } from './VideoList.styled.component';
import VideoCard from '../VideoCard';
import mockData from '../../mocks/youtube-videos-mock.json';

function VideoList() {
  const videos = mockData.items;

  return (
    <VideoListContainer>
      {/* Title */}
      <VideoListTitle>Mocked Video List</VideoListTitle>
      {/* Video List */}
      <Videos>
        {videos.map((v) => (
          <VideoCard
            key={`${v.id.videoId || v.id.channelId}`}
            title={v.snippet.title}
            description={v.snippet.description}
            thumbnails={v.snippet.thumbnails}
          />
        ))}
      </Videos>
    </VideoListContainer>
  );
}

export default VideoList;
