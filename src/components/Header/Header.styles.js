import styled from "styled-components";
import hamburguer from '../../img/menu.png';
import profile from '../../img/user.png';

export const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    min-height: 60px;
    background: #1C5476;
    padding: 15px 20px;
    color: #fff;
    display: flex;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Hamburguer = styled.span`
    background-image: url(${hamburguer});
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Search = styled.input`
    padding: 10px;
    margin: 5px 0px;
    background: white;
    border: none;
    border-radius: 3px;
    height: 30px;
    margin-left: 30px;
    background-color: #3E6D8A;
    color: white;
    
    ::placeholder {
        color: white;
    }

    @media (max-width: 485px) {
        margin-left: 15px;
    }
    @media (max-width: 768px) {
        
    }
`;

export const ToggleBox = styled.input`    
    border-radius: 15px;
    width: 42px;
    height: 26px;
    margin-right: 30px;

    @media (max-width: 485px) {
        margin-right: 15px;
    }
    @media (max-width: 768px) {
        
    }
`;

export const Profile = styled.span`
    background-image: url(${profile});
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
`;