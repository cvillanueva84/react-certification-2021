import React from 'react'
import { Link } from 'react-router-dom';
import '../style/NotFound.css';

export const NotFound = () => {
    return (
        <section className="contenedor">
            <div className="not-found ">
                <div className="left">
                    <img src="404.gif"  alt="page not found"/>
                </div>
                <div className="left">
                    <img src="404.jpeg"  alt="page not found"/>
                </div>
            </div>
            <Link to="/" className="home"> ← Home </Link>
        </section>
        
    )
}
