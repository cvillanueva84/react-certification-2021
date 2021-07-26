import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VideoCard from './VideoCard.component';

describe('VideoCard', () => {
  it('Renders VideoCard', () => {
    const { container } = render(<VideoCard />);
    const sideMenuComponent = container.querySelector('.video-card');
    expect(sideMenuComponent).toBeInTheDocument();
  });

  it('Displays thumbnail', () => {
    const thumbnail = 'img.jpg';
    const title = 'title';
    const { container } = render(<VideoCard thumbnail={thumbnail} title={title} />);
    const imgElement = container.querySelector('img');
    const thumbnailElement = container.querySelector(`img[src='${thumbnail}']`);
    const altAttribute = container.querySelector(`img[alt='${title}']`);
    expect(imgElement).toBeInTheDocument();
    expect(thumbnailElement).toBeInTheDocument();
    expect(altAttribute).toBeInTheDocument();
  });

  it('Displays title', () => {
    const title = 'title';
    render(<VideoCard title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});
