import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const StyledHeader = styled.section`
    width: 100%;
    height: 55px;
    padding: 10px 20px;
    background-color: #52BE80;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InputHeader = styled.input`
    height: 100%;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.20);
    padding: 5px 15px;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 15px;
    ::placeholder {
        color: white;
    }
    @media screen and (max-width: 850px) {
        width: 100%;
    }
`;

const ButtonMenu = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 15px;
    &:hover {
        cursor: pointer;
    }
    h1 {
        font-size: 25px;
        margin: 0px;
        margin-left: 5px;
        @media screen and (max-width: 850px) {
            font-size: 20px;
        }
    }
    img {
        width: 25px;
    }
    @media screen and (max-width: 850px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const UserLogIn = styled.div`
    color: white;
    border: 1px solid white;
    border-radius: 7px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    font-size: 15px;
    &:hover {
        cursor: pointer;
    }
`;

const RightSection = styled.section`
    display: flex;
    color: white;
    span {
        font-size: 15px;
        font-weight: bold;
    }

    @media screen and (max-width: 850px) {
        display: none;
    }
`;

const LeftMenu = styled.section`
    top: 0;
    flex: 1 0 auto;
    height: 100%;
    width: 200px;
    display: flex;
    outline: 0;
    z-index: 1200;
    position: fixed;
    overflow-y: auto;
    flex-direction: column;
    background-color: white;
    ul {
        list-style: none;
    }
    li {
        color: black;
    }
`;

const LeftSection = styled.section`
    display: flex;
    align-items: center;
`;

const Bars = styled(FaBars)`
    display: block;
    font-size: 1.3rem;
    cursor: pointer;
    color: #fff;
`;

export { StyledHeader, InputHeader, ButtonMenu, UserLogIn, RightSection, Bars, LeftSection }