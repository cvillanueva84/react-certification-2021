import React from 'react';
import './video.css';
import styled from 'styled-components';

export const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=" video-item item">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
};

const VideoItemStyled = styled(VideoItem)`
    display: flex !important;
    align-items: center !important;
    cursor: pointer;

    & img{
        max-width: 200px;
        max-height: 250px;
    }
    `;

export default VideoItemStyled;