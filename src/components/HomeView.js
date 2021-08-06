import React, { useEffect, useState } from 'react'
import { HeaderNav } from './HeaderNav';
import { HomeScreen } from './HomeScreen';



export const HomeView = ({ defaultCategorias = [] }) => {


    const [categorias, setCategorias] = useState(defaultCategorias);
    useEffect(() => {
        categorias.shift();
    }, [categorias])


    return (
        <div>
            <HeaderNav setCategorias={setCategorias} />
            <ol>
                {
                    categorias.map(categoria =>
                        <HomeScreen
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                }
            </ol>

        </div>
    )
}
