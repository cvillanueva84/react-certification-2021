import React from 'react';

import {
    StyledVideo,
    InfoVideo,
    AuthorInfo
} from './Video.styles';

function Video(props) {
    const { imageUrl, etag, title, channelTitle, publishedDate } = props;
    return (
        <StyledVideo>
            <img
                src={imageUrl}
                alt={"video" + etag}
            />
            <InfoVideo>
                <h3>{title}</h3>
                <AuthorInfo>
                    <p>{channelTitle}</p>
                    <p>{publishedDate.substring(0, publishedDate.length - 10)}</p>
                </AuthorInfo>
            </InfoVideo>
        </StyledVideo>
    );
}

export default Video;