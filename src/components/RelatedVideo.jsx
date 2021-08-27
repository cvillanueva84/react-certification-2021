import React from 'react';
import styled from 'styled-components';

const RelatedVideo = ({className, url, picture, title, description, showRelatedVideo}) => {
    return (
        <>
            <div className={className} onClick={() => showRelatedVideo(url, title, description)}>
                <div>
                    <img src={picture} alt="No picture" height="95" width="130" />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <b>{title}</b>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
};

const StyledRelatedVideo = styled(RelatedVideo)`
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 3px lightgray;
    margin: 10px; 
    padding: 10px;
`;

export default StyledRelatedVideo;