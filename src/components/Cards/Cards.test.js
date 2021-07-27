import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cards } from './Cards.component';
const video = [
  {
    id: {
      kind: 'youtube#channel',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    },
    snippet: {
      title: 'Test title',
      description: 'Test description',
      thumbnails: {
        high: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        },
      },
    },
  },
];
describe('Cards', () => {
  beforeEach(() => {
    render(<Cards videos={video}></Cards>);
  });
  test('should not create a card because is a kind channel', () => {
    const card = screen.queryByText('Test title');
    expect(card).not.toBeInTheDocument();
  });
});
