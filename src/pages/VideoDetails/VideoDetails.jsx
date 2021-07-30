import React from 'react';
import { useParams } from 'react-router';

export const VideoDetails = () => {

    const { videoId } = useParams();
    //const videoId = 'F4neLJQC1_E';

    return (
        <div>
            <h1>VideoDetails</h1>

            <div id="ytplayer">
                <iframe
                    width="800"
                    height="450"
                    allowFullScreen
                    frameBorder="0"
                    title="rick roll"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
        </div>
    );
};
