import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from './Context';

export const CardItem = ({ title, description, url, videoId }) => {

  const { myStateReducer, dispatch } = useContext(GlobalContext);

  const handleClick = () => {
      dispatch({
        type: 'actionAddVideoData',
        payload: {
          ...myStateReducer,
          videoData: {
            title: title,
            description: description,
            url: url,
            videoId: videoId
          }
        }
      });
  }

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

  );

};

CardItem.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
};
