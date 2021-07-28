import React from 'react';
import { Card, CardTitle, CardThumbnail, CardDescription } from './VideoCard.styled';

import { formatDate } from '../../utils/date';

function VideoCard({ title, thumbnail, channelTitle, publishedAt }) {
  return (
    <Card>
      <CardThumbnail src={thumbnail} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {channelTitle} | {formatDate(publishedAt)}
      </CardDescription>
    </Card>
  );
}

export default VideoCard;
