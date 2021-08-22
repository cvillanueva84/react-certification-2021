import React, { useContext } from 'react'
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import { GlobalContext } from './Context';
import { HeaderNav } from './HeaderNav';
import { useHistory } from 'react-router';
import {
    Contenedor,
    VideoDetails,
    VideoDetailsText,
    ContenedorSugeridos,
    Sugeridos
} from '../style/VideoDetailsScreenStyled';



export const VideoDetailsScreen = () => {

    const { myStateReducer, dispatch } = useContext(GlobalContext);
    const { items: videos } = useFetchVideos(myStateReducer.search);
    const history = useHistory();

    const addFavorite = () => {
        dispatch({
            type: 'actionAddFavorites',
            payload: {
                ...myStateReducer,
                favorites: [myStateReducer.videoData, ...myStateReducer.favorites]
            }
        });
        history.replace('/favorites');
    }

    return (
        <>
            <HeaderNav/>

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
