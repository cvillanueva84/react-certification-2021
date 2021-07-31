import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

export const CardItem = ({ title, description, url, videoId, categoria }) => {


  return (

    <div className="card-item">
      <img src={url} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <button
      ><Link
        to={`/videoDetails/${videoId}&${categoria}`}
      ><i className="far fa-play-circle"></i></Link></button>

    </div>

  );

};

CardItem.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
};
