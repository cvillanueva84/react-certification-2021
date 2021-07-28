import React from 'react';
import { useFetchVideos } from '../../hooks/useFetchVideos';
import { CardItem } from '../../components/CardItem';
import PropTypes from 'prop-types';
import './Fill.style.css';


export const Fill = ({categoria}) => {

  const{items:videos, loading} = useFetchVideos(categoria);

  return (
    <div>
      <div className="contenedor">
        {loading && <h2>Loading...</h2>}
        <div className="cards">
          {videos.map(vid => (
            <CardItem key={vid.id} {...vid} />
          ))}
        </div>
        <hr/>
      </div>
    </div>
  );
};


Fill.propTypes = {
  categoria: PropTypes.string.isRequired
}