import styled from 'styled-components';

export const HeaderFav = styled.div`
    .search{
        display: none;
    }
`;

export const CardFavs = styled.div`
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