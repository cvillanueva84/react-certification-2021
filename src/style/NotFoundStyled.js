import styled from 'styled-components';

const NotFoundStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const ImagenStyled = styled.img`
    width: 500px;
    height: 500px;
`;

const LinkStyled = styled.div`
    display: flex;
    justify-content: center;
    

    .home{
        font-size: 100px;
        margin-top: 50px;
        color: black;
        text-decoration: none;
        font-family: monospace;
    }

    .home:hover{
        color: #008CBA;
    }
`;

export {
    NotFoundStyled,
    ImagenStyled,
    LinkStyled
}