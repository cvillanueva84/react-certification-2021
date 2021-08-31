import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Card from '.';

beforeEach(cleanup);

const video = {
  snippet: {
    title: 'wizeline',
    description: 'video wizeline',
    thumbnails: {
      medium: {
        url: 'http://www.youtube.com/watch?v',
      },
    },
  },
  id: {
    videoId: '01',
  },
};

describe('VideoGrid', () => {
  it('Should render Text wizeline', () => {
    render(
      <BrowserRouter>
        <Card
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.medium.url}
          videoId={video.id.videoId}
          key={video.id.videoId}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('wizeline')).toBeInTheDocument();
  });
});
