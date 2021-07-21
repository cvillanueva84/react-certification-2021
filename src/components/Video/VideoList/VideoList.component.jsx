import React from 'react';
import { videoData } from '../../../youtube-videos-mock';

export default function VideoList() {
  const { items } = videoData;

  const data = items.slice(1).map((item) => {
    const {
      snippet: {
        thumbnails: {
          default: { url },
        },
      },
    } = item;

    return (
      <div>
        <p>{url}</p>
      </div>
    );
  });

  return data;
}
