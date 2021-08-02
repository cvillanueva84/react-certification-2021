import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import data from '../../mock/youtube-videos-mock.json';

import HomeCard from './HomeCard.component';

describe('HomeCards', () => {
  const array = data.items;
  const video = array[1];
  const nonVideo = array[0];

  test('renders the description of the video correctly on the card', () => {
    render(
      <HomeCard
        key={video.etag}
        videoId={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        imgUrl={video.snippet.thumbnails.default.url}
      />
    );
    expect(screen.getByText(video.snippet.description)).toBeInTheDocument();
  });

  test('it should validate that the component has anchor that redirects the correct youtube video', () => {
    render(
      <HomeCard
        key={video.etag}
        videoId={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        imgUrl={video.snippet.thumbnails.default.url}
      />
    );
    expect(screen.getByText(video.snippet.title).closest('a')).toHaveAttribute(
      'href',
      `https://www.youtube.com/watch?v=${video.id.videoId}`
    );
  });

  test('it should validate that the component renders only videos', () => {
    render(
      <HomeCard
        key={nonVideo.etag}
        videoId={nonVideo.id.videoId}
        title={nonVideo.snippet.title}
        description={nonVideo.snippet.description}
        imgUrl={nonVideo.snippet.thumbnails.default.url}
      />
    );
    expect(screen.queryByText(nonVideo.snippet.title)).toBeNull();
  });
});
