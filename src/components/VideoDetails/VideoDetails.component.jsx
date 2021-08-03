import React from 'react';
import './VideoDetails.styles.css'; 

function VideoDetails(props){
    const apiKey = 'AIzaSyBLgZkvZQtw0iEKY9tKCq5oJIPN5WZVmuQ';
    const [suggestion, setSuggestion] = React.useState([]); 
    const [idVideo, setIdVideo] = React.useState(props.videoSelected.id.videoId)
    const [searchSuggestions, setSearchSuggestions] = React.useState(props.videoSelected.snippet.title); 
    const [videoSelected, setVideoSelected] = React.useState(props.videoSelected);

    React.useEffect(()=>{
        
        dataFromSearch(); 
        
    },[idVideo])
    
    const dataFromSearch = (busqueda) =>{         
        
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&key=${apiKey}&type=video&maxResults=8&q=${searchSuggestions}`)
             .then(res => {
                 return res.json()
             })
             .then(data => {
                 console.log('SUGERENCIAS'); 
                
                console.log(data)
                setSuggestion(data.items);
             }).catch(error=> console.log(error))
             
      }

      const changeVideo = (item) => {
          console.log('VIDEO SELECCIONADO')
          console.log(item); 
          setIdVideo(item.id.videoId); 
          setSearchSuggestions(item.snippet.title);
          setVideoSelected(item);

      }


    return (
        <div className = "box-father">       
            <div className = "video-container"> 
            <iframe src = {`https://www.youtube.com/embed/${idVideo}`} className = "video-selected">

            </iframe>
            <div className = "info-section">
                <h3>{videoSelected.snippet.title}</h3>
                <h4>{videoSelected.snippet.publishTime}</h4>                
            </div>
            </div>
           
            

            <div className = "recomendados">
                {
                    suggestion.length !== 0 ? (
                        suggestion.filter((item,index)=> index !== 0).map(item=>{
                            
                            return(
                                <div className = "card-video" onClick = {()=>changeVideo(item)}>  
                                <div className = "imagen">
                                    <img src={item.snippet.thumbnails.default.url} alt="Video img" />
                                </div>
                                <div className = "info-video">
                                    <h4>{item.snippet.title}</h4>
                                    <h5>{item.snippet.channelTitle}</h5>                                    
                                </div>
                            </div> 
                            )
                        })
                    ):(null)
                }                    
            </div>
        </div>
    )
}

export default VideoDetails; 

