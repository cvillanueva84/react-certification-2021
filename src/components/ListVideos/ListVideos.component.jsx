import React from 'react';
import videos from '../../videos.js';
import Card from '../Card/Card.component.jsx';
import './ListVideos.styles.css'; 

function ListVideos({List}){
    
    
    return (
        <div>            
            <div className = "caja">
            {List.map(item=>{
                return(
                    <Card elemento = {item}/>                    
                )
            })}            
            </div>
            
        </div>
    )
}

export default ListVideos; 

