import React from 'react';
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import '../style/HomeScreen.css';

export const HomeScreen = ({ categoria }) => {


    const { items: videos, loading } = useFetchVideos(categoria);

    return (
        <>
            <div className="contenedor">
                {loading ? <h1>Loading...</h1> : <h1>{categoria}</h1>}
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
