import styled from 'styled-components';

const Contenedor = styled.div`
    margin: auto;
    padding-top: 80px;
    width: 90%;

    iframe {
        width: 640px;
        height: 360px;
    }

    @media (max-width: 768px){
        padding-top: 120px;

        iframe {
            width: 320px;
            height: 240px;
        }
    }

    @media (max-width: 480px) {
        padding-top: 220px;
    }
`;

const VideoDetails = styled.div`
    height: auto;
    padding: 10px 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;

    h2{
        text-align: center;
        font-family: monospace;
        margin: 18px 0;
        font-size: 40px;
        line-height: 35px;
    }

    p {
        text-align: justify;
        margin: 0 30px 10px 30px;
    }
`;

const VideoDetailsText = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    button {
        color: #008CBA;
        border: 2px solid #008CBA;
        margin: 10px 5px;
        padding: 10px 12px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 40px;
    }

    button:hover{
        color: white;
        background-color: #008CBA;
        transition-duration: 0.4s;
    }
    button i {
        margin-right: 10px;
    }
`;

const ContenedorSugeridos = styled.div`
    margin: auto;
    width: 90%;

    h3 {
        text-align: center;
        font-family: monospace;
        margin-top: 5px;
        font-size: 35px;
    }
`;

const Sugeridos = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: left;
    overflow-x: scroll;

    .card-item {
        display: flex;
        flex-flow: column;
        width: 300px;
        height: auto;
        margin: 5px;
        margin-bottom: 20px;
    }

    .card-item img {
        width: auto;
        height: auto
    }

    .card-item h2{
        font-size: 18px;
        margin-top: 1px;
        margin-bottom: 5px;
        text-align: center;
    }

    .card-item p {
        display: none;
    }

    .card-item button{
        border: none;
        width: 100%;
        background-color: transparent;
        margin: auto;
        display: none;
    }

    .card-item button i {
        color: #008cba;
        font-size: 45px;
    }

    .card-item:hover > button {
        display: block;
    }

`;

const ContenedorFavoritos = styled.div`
    margin: auto;
    width: 90%;

    h3 {
        text-align: center;
        font-family: monospace;
        margin-top: 5px;
        font-size: 35px;
    }
`;

const Favoritos = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: left;
    overflow-x: scroll;

    .card-item {
        display: flex;
        flex-flow: column;
        width: 300px;
        height: auto;
        margin: 5px;
        margin-bottom: 20px;
    }

    .card-item img {
        width: auto;
        height: auto
    }

    .card-item h2{
        font-size: 18px;
        margin-top: 1px;
        margin-bottom: 5px;
        text-align: center;
    }

    .card-item p {
        display: none;
    }

    .card-item .botones-favoritos{
        display: flex;
        justify-content: center;
        flex-direction: row;
    }


    .card-item .botones-favoritos button {
        border: none;
        width: 100%;
        background-color: transparent;
        color: #008cba;
        margin: 0px 32px;
        padding: 3px auto;
        border-radius: 8px;
        display: none;
    }

    .card-item .botones-favoritos button i {
        color: #008cba;
        font-size: 30px;
        cursor: pointer;
    }

    .card-item .botones-favoritos button i:hover{
        transform: scale(1.4);
        cursor: pointer;
        color: #008cba;
        transition: 0.4s;
    }

    .card-item:hover > .botones-favoritos button{
    display: block;
    }

`;


export {
    Contenedor,
    VideoDetails,
    VideoDetailsText,
    ContenedorSugeridos,
    Sugeridos,
    ContenedorFavoritos,
    Favoritos
}