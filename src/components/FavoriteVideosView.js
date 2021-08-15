import React, { useContext } from 'react'
import { GlobalContext } from './Context'
import { FavItem } from './FavItem';
import { HeaderNav } from './HeaderNav';

export const FavoriteVideosView = () => {

    const { myStateReducer } = useContext(GlobalContext);

    return (
        <>
            <div className="favorite-header">
                <HeaderNav />
            </div>
            <div className="contenedor">
                <h1>Favorite Videos:</h1>
                <div className="cards">
                    {
                        myStateReducer.favorites.map(vid => (
                            <FavItem
                                key={vid.videoId}
                                {...vid}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
