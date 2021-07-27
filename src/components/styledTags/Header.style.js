import styled from 'styled-components';

export const Navbar = styled.div`
    height: 65px;
    background-color: ${props => props.theme.primary};
    position: relative;
    display: flex;
    box-shadow: 5px 0 15px 2px rgba(0, 0, 0, 0.18);
    z-index: 10;
    transition: all .3s;
`
export const HamburguerButton = styled.button`
    font-size: 35px;
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.primary};
    border-style: none;
    padding: 0 10px;
    border-radius: 5px;
    margin: 0 25px;
    :hover{
        cursor: pointer;
    }
`
export const SearchInput = styled.input`
    color: ${props => props.theme.text};
    font-weight: bolder;
    font-size: 16px;
    padding: 10px;
    margin: 15px 20px;
    background-color: ${props => props.theme.body};
    border-radius: 5px;
    border-style: none;
    outline: none;

    ::placeholder{
        color: ${props => props.theme.text};
    }
`
