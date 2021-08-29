import React, { useContext } from 'react';
import GlobalContext from '../state/GlobalContext';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const VideoPlayer = (props) => {
    const {state, dispatch} = useContext(GlobalContext);
    const {url, title, description, picture} = props;

    const addToFavorites = () => {
        dispatch({
            type: 'ADD_FAVORITE_VIDEO',
            payload: {
                video: {
                    url: url,
                    title: title,
                    description: description,
                    picture: picture
                }
            }
        });
    }

    const removeFromFavorites = () => {
        dispatch({
            type: 'REMOVE_FAVORITE_VIDEO',
            payload: {
                id: url,
            }
        });
    }

    const buttonForFavorites = () => {
        if(state.user.loggedIn){
            if(state.favouriteVideos.some(video => video.url === url)){ //If the video has already been added as favourite
                return (<Button onClick={() => removeFromFavorites()}> Remove from favorites</Button>);
            } else{ //If the video has not been added
                return (<Button onClick={() => addToFavorites()}> Add to favorites</Button>) ;
            }
        } else{
            return null;
        }
    }

    return (
        <>
            <div className={props.className}>
                <iframe 
                width="100%" 
                height="500px" 
                src={`https://www.youtube.com/embed/${url}`}
                frameborder="0" 
                ></iframe>

                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{title}</p>
                        {buttonForFavorites()}
                    </div>
                    
                    <p>{description}</p>
                </div>

            </div>
        </>
    );
};

const StyledVideoPlayer = styled(VideoPlayer)`
    padding: 10px;
`;

export default StyledVideoPlayer;