import React from 'react';
import './Card.styles.css'

function Card({elemento}){
    console.log(elemento); 
    return (
        <div className = "card">
            <img src={elemento.img} alt=""  width = "300"/>
            <h3>{elemento.title}</h3>
            <h4>{elemento.descripcion}</h4>
        </div>
    )
}

export default Card; 
