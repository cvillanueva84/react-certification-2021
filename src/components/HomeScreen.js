import React, { useContext} from 'react';
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import '../style/HomeScreen.css';
import { GlobalContext } from './Context'

export const HomeScreen = () => {

    const { myStateReducer } = useContext(GlobalContext);
    const { items: videos, loading } = useFetchVideos(myStateReducer.search);
    

    return (
        <>
            <div className="contenedor">
                {loading ? <h1>Loading...</h1> : <h1>{myStateReducer.search}</h1>}
                <div className="cards">
                    {videos.map(vid => (
                        <CardItem
                            key={vid.id}
                            {...vid}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}
