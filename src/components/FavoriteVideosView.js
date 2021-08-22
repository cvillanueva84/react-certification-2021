import React, { useContext } from 'react'
import { ContenedorStyled, Title } from '../style/HomeScreenStyled';
import { GlobalContext } from './Context'
import { FavItem } from './FavItem';
import { HeaderNav } from './HeaderNav';
import { HeaderFav, CardFavs } from '../style/FavoriteVideosViewStyled';


export const FavoriteVideosView = () => {

    const { myStateReducer } = useContext(GlobalContext);

    return (
        <>
            <HeaderFav>
                <HeaderNav />
            </HeaderFav>

            <ContenedorStyled>
                <Title>Favorite Videos:</Title>
                <CardFavs>
                    {
                        myStateReducer.favorites.map(vid => (
                            <FavItem
                                key={vid.videoId}
                                {...vid}
                            />
                        ))
                    }
                </CardFavs>
            </ContenedorStyled>
        </>
    )
}
