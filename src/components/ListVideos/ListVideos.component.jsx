import React from 'react';
import videos from '../../videos.js';
import Card from '../Card/Card.component.jsx';
import './ListVideos.styles.css'; 

function ListVideos({List,dataVideos, hideList}){

    React.useEffect(()=>{
        console.log('Data videos: ')
        console.log(dataVideos); 
    },[])
    
    return (
        <div>            
            <div className = "caja">
            {
                dataVideos.items.map(item=>{
                    console.log(item); 
                    return(                        
                        <Card element = {item.snippet} hideList = {hideList} item = {item}/>
                    )
                })
            }                     
            </div>
            
        </div>
    )
}

export default ListVideos; 

