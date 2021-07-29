/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render, screen } from '@testing-library/react';

import VideoCard from '../VideoCard';

// In order to reuse the render in all cases
beforeEach(() => {
  const mockVideo = {
    title: 'WZL',
    description: 'Test Video',
    thumbnails: { medium: { url: '#' } },
  };
  render(<VideoCard {...mockVideo} />);
});

describe('VideoCard component Test', () => {
  test('Should be some article tag within the components', () => {
    // render(<VideoCard />);
    const articleEl = screen.queryByText(/WZL/i);
    // screen.debug(articleEl);
    expect(articleEl).toBeInTheDocument();
  });
});
