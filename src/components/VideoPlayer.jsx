import React from 'react';
import styled from 'styled-components';

const VideoPlayer = (props) => {
    const {url, title, description} = props;

    return (
        <>
            <div className={props.className}>
                <iframe 
                width="100%" 
                height="500px" 
                src={`https://www.youtube.com/embed/${url}`}
                frameborder="0" 
                ></iframe>

                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

            </div>
        </>
    );
};

const StyledVideoPlayer = styled(VideoPlayer)`
    padding: 10px;
`;

export default StyledVideoPlayer;