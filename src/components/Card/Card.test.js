import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card.component';
const video = [
  {
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
describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        image={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        description={video.snippet.description}
      ></Card>
    );
  });
  test('should contains a title', () => {
    const title = screen.queryByText('Test title');
    expect(title).toBeInTheDocument();
  });
  test('should contains a description', () => {
    const description = screen.queryByText('Test description');
    expect(description).toBeInTheDocument();
  });
});
