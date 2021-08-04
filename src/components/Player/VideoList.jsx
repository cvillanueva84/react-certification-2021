import React from 'react';
import VideoItemStyled from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItemStyled key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div>{renderedVideos}</div>;
};
export default VideoList;