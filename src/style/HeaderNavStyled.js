import styled from 'styled-components';

export const HeaderStyled = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 0;
    background-color: #242526;
    position: fixed;
    box-shadow: 0 0 8px 2px rgb(82, 81, 81);  

    
`;

export const HeaderContenedorStyled = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
`;

export let PartHeaderStyled = styled.div`
    input{
        height: 100%;
        line-height: inherit;
    }

    .box_input input::placeholder {
        color: white;
        font-size: 12px;
    }

    .box_input span {
        width: 30%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color: white;
    }

    @media (max-width: 480px){
        margin-bottom: 8px;
    }
`;

export const BoxInput = styled.div`
    width: 200px;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 24px;
`;

export const AlignBoxInput = styled.div`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 24px;

    &&:hover{
        border: 1px solid rgba(24, 223, 22, 0.81);
    }

    input {
        width: 90%;
        background-color: transparent;
        font-size: 18px;
        padding: 10px 15px;
        border: none;
        outline: 0;
        color: white;
    }

    input::placeholder {
        color: white;
        font-size: 12px;
    }

    span {
        width: 30%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color: white;
    }
`;


export const BoxInputToggle = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    border-radius: 24px;
    height: 100%;
`;

export const AlignBoxInputToggle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 24px;
    background-color: rgba(255, 255, 255, 0.24);

    .toggle_left {
        width: 50%;
    }

    .toggle_left:hover {
        border-radius: 50%;
        -webkit-box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
        -moz-box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
        box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
    }

    .toggle_right {
        width: 50%;
    }

    .toggle_right:hover {
        border-radius: 50%;
        -webkit-box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
        -moz-box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
        box-shadow: inset 0px 0px 3px 2px rgba(24, 223, 22, 0.81);
    }


    .left-header i{
        background-color: transparent;
        border: none;
        font-size: 36px;
        cursor: pointer;
        color: white;
        line-height: 40px;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 36px;
        cursor: pointer;
        color: white;
    }

    button span{
        font-size: 36px;
        color: white;
    }

    button span:hover{
        color: rgba(24, 223, 22, 0.81);
    }
    
`;


export const RightHeader = styled.div`
    button {
        background-color: transparent;
        border: none;
        font-size: 36px;
        cursor: pointer;
        color: white;
    }

    button span{
        font-size: 36px;
        color: white;
    }

    button span:hover{
        color: rgba(24, 223, 22, 0.81);
    }

    small{
        font-size: 12px;
        color: aqua;
        margin-right: 5px;
    }
`;

export const ButtonHome = styled.button`
    background-color: transparent;
    border: none;
    font-size: 36px;
    cursor: pointer;
    color: white;

    i {
        color: white;
    }

    i:hover{
        color: rgba(24, 223, 22, 0.81);
    }


`;
