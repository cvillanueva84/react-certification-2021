import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

const mockData = {
  id: '12344',
  title: 'Title',
  description: 'Description',
  image: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
};

beforeEach(() => {
  render(
    <VideoCard
      key={mockData.id}
      title={mockData.title}
      description={mockData.description}
      image={mockData.image}
    />
  );
});

describe('VideoCard', () => {
  test('Render video values on card', () => {
    const titleElement = screen.queryByText('Title');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.queryByText('Description');
    expect(descriptionElement).toBeInTheDocument();
  });
});
