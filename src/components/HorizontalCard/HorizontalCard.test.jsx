import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HorizontalCard from './HorizontalCard';

beforeEach(cleanup);

const card = [
  {
    id: '01',
    snippet: {
      title: 'Hello',
      thumbnails: {
        medium: {
          url: 'http://www.youtube.com/watch?v',
        },
      },
    },
  },
  {
    id: '02',
    snippet: {
      title: 'wizeline',
      thumbnails: {
        medium: {
          url: 'http://youtube.com/watch?v=kdkdj',
        },
      },
    },
  },
];

describe('VideoGrid', () => {
  it('Should render the Video Grid Component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HorizontalCard
          title={card[0].snippet.title}
          image={card[0].snippet.thumbnails.medium.url}
          videoId={card[0].id.videoId}
          key={card[0].id.videoId}
        />
      </BrowserRouter>
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
