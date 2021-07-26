import React from 'react';
import PropTypes from 'prop-types';

export const CardItem = ({title,description,url}) => {
    return (
        <div className="card-item">
            <img src={url} alt={title}></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

CardItem.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


