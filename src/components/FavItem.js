import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/FavoriteVideosView.css'
import { GlobalContext } from './Context';

export const FavItem = ({ title, description, url, videoId }) => {

    const { myStateReducer, dispatch } = useContext(GlobalContext);

    const handleClickPlay = () => {
        dispatch({
            type: 'actionAddVideoDataFav',
            payload: {
                ...myStateReducer,
                videoDataFav: {
                    title: title,
                    description: description,
                    url: url,
                    videoId: videoId
                }
            }
        });
    }

    const handleClickDelete = () => {
        dispatch({
            type: 'actionDelete',
            payload: videoId
        });
    }


    return (
        <div className="card-item">
            <img src={url} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="botones-favoritos">
                <button
                    className="button-left"
                    onClick={handleClickPlay}
                ><Link
                    to={`/videodetailsfavs`}
                ><i className="far fa-play-circle"></i></Link></button>

                <button
                    className="button-right"
                    onClick={handleClickDelete}
                ><i className="far fa-trash-alt"></i></button>


            </div>
        </div>
    );
};

FavItem.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};
