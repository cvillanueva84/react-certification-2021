import React from 'react';
import styled from 'styled-components';

const RelatedVideo = ({className, picture, title, description}) => {
    return (
        <>
            <div className={className}>
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