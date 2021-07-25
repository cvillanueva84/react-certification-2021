import React, { useEffect, useState } from 'react';
import { CardItem } from '../../components/CardItem';
import { getVids } from '../../components/helpers/getVids';
import './Fill.style.css';


const Fill = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
        getVids().then(vids => {
            setVideos(vids)
        })

  }, [])

  return (
    <div>
      <div className="contenedor">
        
        <div className="cards">
            {
                videos.map(vid =>(
                    <CardItem key={vid.id} {...vid}/>
                ))
            }

        </div>

      </div>
    </div>
  );
};

export default Fill;

