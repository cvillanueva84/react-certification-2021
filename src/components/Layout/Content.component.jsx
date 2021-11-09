import React from 'react';

import { ContentWrapper } from './Content.styles';
import VideoComponent from './Video.component';

const data = require('../../mockdata/youtube-videos-mock.json');

function ContentComponent() {
    const element = data && data.items.map((item)=>(
      <VideoComponent description={item.snippet.description} key={item.etag} title={item.snippet.title} url={item.snippet.thumbnails.medium.url} />
    ))
    return (
      <ContentWrapper>
        {element}
      </ContentWrapper>
    )
}

export default ContentComponent;