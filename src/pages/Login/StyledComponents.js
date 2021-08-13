import styled from 'styled-components';

export const CloseBtn = styled.button`
    background-color: red;
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