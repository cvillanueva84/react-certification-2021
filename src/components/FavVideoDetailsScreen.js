import React, { useContext } from 'react';
import { GlobalContext } from './Context';
import { FavItem } from './FavItem';
import { HeaderNav } from './HeaderNav';
import {
    Contenedor,
    VideoDetails,
    VideoDetailsText,
    ContenedorFavoritos,
    Favoritos
} from '../style/VideoDetailsScreenStyled';
import { HeaderFav } from '../style/FavoriteVideosViewStyled';


export const FavVideoDetailsScreen = () => {

    const { myStateReducer } = useContext(GlobalContext)

    return (
        <>
            <HeaderFav>
                <HeaderNav />
            </HeaderFav>
            <Contenedor>
                <VideoDetails>
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${myStateReducer.videoDataFav.videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    <VideoDetailsText>
                        <h2>{myStateReducer.videoDataFav.title}</h2>
                        <p>{myStateReducer.videoDataFav.description}</p>
                    </VideoDetailsText>
                </VideoDetails>
                <hr />
            </Contenedor>


            <ContenedorFavoritos>
                <h3>Favorites: </h3>
                <Favoritos>
                    {myStateReducer.favorites.map(vid => (
                        <FavItem
                            key={vid.videoId}
                            {...vid}
                        />
                    ))}
                </Favoritos>
            </ContenedorFavoritos>


        </>
    )
}
