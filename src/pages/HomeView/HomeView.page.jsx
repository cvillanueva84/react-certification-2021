import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Fill } from '../Fill/Fill'

import '../HomeView/HomeView.style.css';
import { VideoDetails } from '../VideoDetails/VideoDetails';

export const HomeView = ({ defaultCategorias = [] }) => {

  //Sorry, I want to prof the useEffect
  const [categorias, setCategorias] = useState(defaultCategorias);
  useEffect(() => {
    categorias.shift();
  }, [categorias])

  return (
    <div>

      <Header setCategorias={setCategorias} />
      <ol>
        {
          categorias.map(categoria =>
            <Fill
              key={categoria}
              categoria={categoria}
            />
          )
        }
      </ol>

      <div className="video">
        {categorias.map(categoria => 
            <VideoDetails
            key={categoria}
            categoria={categoria}
            />
          )
        }
      </div>

    </div>
  );
};

