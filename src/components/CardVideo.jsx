import React from 'react';
import styled from 'styled-components';

const CardVideo = ({className, title, description, picture}) => {
    return (
        <>
            <div className={className}>
                <div>
                    <div>
                        <img src={picture} alt="Picture" height="140" width="345" />
                    </div>
                </div>
                <div style={{margin:10}}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
};

const StyledCardVideo = styled(CardVideo)`
    min-width: 345px;
    width: 345px;
    margin: 10;
    border-radius: 7px;
    border-width: 0.5px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0px 3px 3px lightgray;
`;

export default StyledCardVideo;