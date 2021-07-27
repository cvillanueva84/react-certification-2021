import styled from 'styled-components';

export const Card = styled.a`
    position: relative;
    margin: 8px 8px;
    background-color: ${props => props.theme.background};
    padding: 20px;
    border: 12px;
    border-radius: 10px;
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.16);
    flex-basis: 300px;
    min-width: 0;
    transition: all .3s;
    text-decoration: none;
`

export const PreviewImage = styled.img`
    height: 150px;
    border-radius: 10px;
`
export const PreviewName = styled.span`
    font-size: 20px;
    font-weight: bolder;
    color: ${props => props.theme.text};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`
export const PreviewDescription = styled.span`
    display: block;
    font-size: 14px;
    word-break: break-all;
    color: ${props => props.theme.text};
    font-weight: bold;
`