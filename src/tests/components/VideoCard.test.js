import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from '../../components/VideoCard';
import { data } from '../../data/youtube-videos-mock';

describe('Testing VideoCard component.', () => {
  const video = data.items[0];

  test('Rendering correctly.', () => {
    const card = render(
      <VideoCard key={video.snippet.thumbnails.default.url} {...video} />
    );

    expect(card).toMatchSnapshot();
  });
});
