import React, { useContext } from 'react'
import { GlobalContext } from './Context'

export const FavoriteVideosView = () => {

    const { myStateReducer} = useContext(GlobalContext);
    console.log(myStateReducer);

    return (
        <div className="contenedor">
            <h1>Favorite Videos View</h1>
        </div>
    )
}
