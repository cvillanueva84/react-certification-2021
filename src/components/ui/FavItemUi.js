import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const FavItemUi = ({title, description, url, handleClickPlay, handleClickDelete}) => {
    return (
        <div className="card-item">
            <img src={url} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="botones-favoritos">
                <button onClick={handleClickPlay}>
                    <Link to={`/videodetailsfavs`}>
                        <i className="far fa-play-circle"></i>
                    </Link>
                </button>

                <button id="delete" onClick={handleClickDelete}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}


FavItemUi.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
  };