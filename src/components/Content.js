import React, {useState, useEffect} from 'react';
import {Background, Tittle, CardsArea } from './styledTags/Content.style';
import VideoCard from './VideoCard';


const Content = () => { 
    const [videos, setVideos] = useState([])
    const link = 'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'

    const getVideos = async () => {
        const response = await fetch(link)
        const datos = await response.json()
        setVideos(datos.items)
    }
    
    useEffect(() => {
        getVideos();
      }, []);
    
    return(
        <Background>
            <Tittle>Welcome to the challenge</Tittle>
            <CardsArea>
                {videos.map((each) => 
                    <VideoCard 
                        key={each.snippet.publishedAt} 
                        title={each.snippet.title} 
                        description={each.snippet.description} 
                        image={each.snippet.thumbnails.medium.url}
                    />)
                }
            </CardsArea>
        </Background> 
    )
}

export default Content;
