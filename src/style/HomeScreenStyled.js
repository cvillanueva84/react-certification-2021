import styled from 'styled-components';

const ContenedorStyled = styled.div`
    margin: auto;
    padding-top: 100px;
    width: 90%;

    @media (max-width: 480px){
        padding-top: 230px;
    }
`;

const Title = styled.h1`
    font-family: monospace;
    text-transform: capitalize;
    text-align: center;
    font-size: 50px;
    margin-top: 5px;
`;

const CardStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 5px 0;

    .card-item {
        border: 1px solid #ddd;
        border-radius: 10px;
        height: auto;
        width: 300px;
        margin: 15px;
        padding: 10px 10px;
        box-shadow: 6px 9px 16px -1px rgba(0, 0, 0, 0.53);
        -webkit-box-shadow: 6px 9px 16px -1px rgba(0, 0, 0, 0.53);
        -moz-box-shadow: 6px 9px 16px -1px rgba(0, 0, 0, 0.53);
    }

    .card-item h2 {
        font-size: 20px;
        margin: 5px 0;
        text-align: center;
        line-height: 20px;
    }

    .card-item p {
        margin: 10px auto;
        margin-bottom: 10px;
        text-align: justify;
        font-size: 15px;
    }

    .card-item img {
        border-radius: 10px;
        height: auto;
        width: 100%;
    }

    .card-item button{
        border: none;
        width: 100%;
        background-color: transparent;
        margin: auto;
        display: none;
    }

    .card-item button i{
        color: #008cba;
        font-size: 45px;
    }

    .card-item button i:hover{
        transform: scale(1.4);
        cursor: pointer;
        color: #008cba;
        transition: 0.4s;
    }

    .card-item:hover > button {
        display: block;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        .card-item {
            border-radius: 5px;
            height: auto;
            margin: 10px;
            width: 80%;
        }
    }

`;


export {
    ContenedorStyled,
    Title,
    CardStyled
}