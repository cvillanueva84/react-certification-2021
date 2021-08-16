import React, { useContext } from 'react'
import { GlobalContext } from './Context'
import { FavItem } from './FavItem'
import { HeaderNav } from './HeaderNav'

export const FavVideoDetailsScreen = () => {

    const { myStateReducer } = useContext(GlobalContext)

    return (
        <>
            <div className="favorite-header">
                <HeaderNav />
            </div>
            <div className="contenedor">
                <div className="video-details">
                    <div className="video-details-vid">
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${myStateReducer.videoDataFav.videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </div>

                    <div className="video-details-text">
                        <h2>{myStateReducer.videoDataFav.title}</h2>
                        <p>{myStateReducer.videoDataFav.description}</p>
                    </div>
                </div>
                <hr />
            </div>


            <div className="contenedor-sugeridos">
                <h3>Favorites: </h3>
                <div className="sugeridos">
                    {myStateReducer.favorites.map(vid => (
                        <FavItem
                            key={vid.videoId}
                            {...vid}
                        />
                    ))}
                </div>
            </div>


        </>
    )
}
