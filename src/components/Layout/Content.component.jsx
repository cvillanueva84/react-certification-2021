import React from 'react';

import { BlockElement, ContentWrapper, Description, VideoThumbnail } from './Content.styles';

const data = require('../../mockdata/youtube-videos-mock.json');

function ContentComponent() {
    const element = data && data.items.map((item)=>(
      <BlockElement>
        <VideoThumbnail src={item.snippet.thumbnails.medium.url} title={item.snippet.title} />
        <Description>
          <h3>{item.snippet.title}</h3>
          <div>{item.snippet.description}</div>
        </Description>
      </BlockElement>
        
    ))
    return (
      <ContentWrapper>
        {element}
      </ContentWrapper>
    )
}

export default ContentComponent;