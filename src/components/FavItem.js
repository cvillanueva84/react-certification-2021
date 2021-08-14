import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/FavoriteVideosView.css'

export const FavItem = ({ title, description, url, videoId }) => {

    const handleClickPlay = () => {
        console.log('play');
    }

    const handleClickDelete = () => {
        console.log('delete');
    }


    return (
        <div className="card-item">
            <img src={url} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="botones-favoritos">
                <button
                    onClick={handleClickPlay}
                    className="button-left"
                ><Link
                    to={`/videodetailsfavs`}
                ><i className="far fa-play-circle"></i></Link></button>

                <button
                    onClick={handleClickDelete}
                    className="button-right"
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
