import styled from 'styled-components';

export const CloseBtn = styled.button`
    background-color: #FF2300;
    color: #e2e2e2;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        box-shadow: 5px 5px 15px 0px #000000;
        transform: translate(2px);
    }
`;

CloseBtn.displayName = 'CloseBtn'

export const LoginBtn = styled.button`
    background: green;
    color: #e2e2e2;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        box-shadow: 5px 5px 15px 0px #000000;
        transform: translate(2px);
    }
`;

LoginBtn.displayName = 'LoginBtn'

export const ErrorDiv = styled.div`
    background-color: #FF2300;
    padding: 2rem;
    text-align: left ;
    border-radius: 4px;
    margin: 1.5rem 0;
`;

ErrorDiv.displayName ='ErrorDiv'

export const ErrorSpan = styled.span`
    margin-left: 0px;
    color: #ffff;
    font-size: 1.6rem;
`