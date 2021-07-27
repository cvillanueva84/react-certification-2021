import React from 'react';
import {Card, PreviewImage, PreviewName, PreviewDescription} from './styledTags/VideoCard.style'

const VideoCard = ({title, description, image}) => {
    
    return(
        <Card href="">
            <PreviewImage src={image}/>
            <PreviewName>{title}</PreviewName>
            <PreviewDescription>{description}</PreviewDescription>
        </Card>
    )
}


export default VideoCard;