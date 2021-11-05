import styled from 'styled-components';

export const BlockElement = styled.div`
    flex: 1 0 21%;
    margin: 15px;
    background-color: white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    overflow: hidden;
`;
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    row-gap: 10px;
    column-gap: 2em;
`;

export const Description = styled.div`
    padding: 10px;
`;

export const VideoThumbnail = styled.img`
    width: 100%;
`;