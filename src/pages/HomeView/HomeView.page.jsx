import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Fill } from '../Fill/Fill'

import '../HomeView/HomeView.style.css';


export const HomeView = ({ defaultCategorias = [] }) => {


  const [categorias, setCategorias] = useState(defaultCategorias);
  useEffect(() => {
    categorias.shift();
  }, [categorias])

  return (
    <div>

      <Header setCategorias={setCategorias}/>
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

    </div>
  );
};

