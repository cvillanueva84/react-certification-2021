import React, { useContext } from 'react'
import { useFetchVideos } from '../hooks/useFetchVideos';
import { GlobalContext } from './Context';
import { useHistory } from 'react-router';
import { VideoDetailsScreenUi } from './ui/VideoDetailsScreenUi';

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
        <VideoDetailsScreenUi 
            myStateReducer={myStateReducer} 
            videos={videos} 
            addFavorite={addFavorite}
        />
    )
}
