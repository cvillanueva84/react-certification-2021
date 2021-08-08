import React, { useContext } from 'react'
//import { useParams } from 'react-router'
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
//import { VideoDat } from './VideoDat';
import '../style/VideoDetailsScreen.css'
import { GlobalContext } from './Context';
import { HeaderNav } from './HeaderNav';

export const VideoDetailsScreen = () => {


    //const { videoId } = useParams();
    const { search, videoId, videoData } = useContext(GlobalContext);

    const { items: videos } = useFetchVideos(search);

    return (
        <div>
            <HeaderNav/>
            <div className="contenedor">
                <div className="video-details">
                    <div className="video-details-vid">
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${videoId.videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </div>

                    <div className="video-details-text">
                        <h2>{videoData.title}</h2>
                        <p>{videoData.description}</p>
                    </div>

                </div>
                <hr />
            </div>

            <div className="contenedor-sugeridos">
                <h3>Sugeridos: </h3>
                <div className="sugeridos">
                    {videos.map(vid => (
                        <CardItem
                            key={vid.id}
                            {...vid}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
