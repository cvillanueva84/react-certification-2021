import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CardItemUi = ({ title, description, url, handleClick} ) => {

    return (
        <div className="card-item">
            <img src={url} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <button
                onClick={handleClick}
            ><Link
                to={`/videodetails`}
            ><i className="far fa-play-circle"></i></Link></button>
        </div>
    )
}


CardItemUi.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired
};