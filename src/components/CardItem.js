import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const CardItem = ({ title, description, url, videoId }) => {


  return (
    <div className="card-item">
      <img src={url} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{videoId}</p>
      <Link to={`/videoDetails/${videoId}`}>Ver contenido</Link>
    </div>
  );
};

CardItem.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
