import React from 'react';
import './Card.styles.css'

function Card({element, hideList,item}){
    React.useState(()=>{

        console.log('CARD COMPONENTE'); 
        console.log(item); 

    },[])


    return (    
        <div className = "card" onClick = {()=>hideList(item)}>
            <img src={element.thumbnails.high.url} alt=""  width = "300"/>
            <h3>{element.title}</h3>            
        </div>
    )
}

export default Card; 
