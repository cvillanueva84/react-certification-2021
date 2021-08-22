import React from 'react'
import { Link } from 'react-router-dom';
import { NotFoundStyled, ImagenStyled, LinkStyled} from '../style/NotFoundStyled'

export const NotFound = () => {
    return (
        <>
            <NotFoundStyled>
                <ImagenStyled src="404.jpeg" alt="page not found" />
                <ImagenStyled src="404.gif" alt="page not found" />
            </NotFoundStyled>
            <LinkStyled>
                <Link to="/" className="home" > ← Home </Link>
            </LinkStyled>
        </>

    )
}
