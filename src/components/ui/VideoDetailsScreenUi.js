import React from 'react';
import { CardItem } from '../CardItem';
import { HeaderNav } from '../HeaderNav';
import {
    Contenedor,
    VideoDetails,
    VideoDetailsText,
    ContenedorSugeridos,
    Sugeridos
} from '../../style/VideoDetailsScreenStyled';


export const VideoDetailsScreenUi = ({myStateReducer, videos, addFavorite}) => {
    return (
        <>
            <HeaderNav />

            <Contenedor>
                <VideoDetails>
                    <iframe
                        allowFullScreen
                        frameBorder="0"
                        title="rick roll"
                        src={`https://www.youtube.com/embed/${myStateReducer.videoData.videoId}?autoplay=1`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />

                    <VideoDetailsText>
                        <h2>{myStateReducer.videoData.title}</h2>
                        <p>{myStateReducer.videoData.description}</p>
                        <button
                            id="addFavorite"
                            onClick={addFavorite}
                        ><i className="fas fa-folder-plus"></i>Add to favorites</button>
                    </VideoDetailsText>

                </VideoDetails>
                <hr />
            </Contenedor>

            <ContenedorSugeridos>
                <h3>Related videos: </h3>
                <Sugeridos>
                    {videos.map(vid => (
                        <CardItem
                            key={vid.id}
                            {...vid}
                        />
                    ))}
                </Sugeridos>
            </ContenedorSugeridos>
        </>
    )
}
