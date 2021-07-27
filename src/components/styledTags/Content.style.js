import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${props => props.theme.background};
    padding: 0 50px;
`
export const Tittle = styled.h1`
    text-align: center;
    font-size: 60px;
    padding: 30px 0;
    color: ${props => props.theme.text};
`

export const CardsArea = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    transition: all .3s;
`