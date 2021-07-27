import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from './VideoCard.styles';

function VideoCard({ title, description, image }) {
  return (
    <Card>
      <CardHeader image={image} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
