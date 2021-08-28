import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from '../VideoCard.component';
import { items } from '../../Files/youtube-videos-mock.json';

describe('VideoCard', () => {
  it('should render same text passed into title prop', () => {
    render(<VideoCard value={items[0]} />);
    const headingElement = screen.queryByText(items[0].snippet.title);
    expect(headingElement).toBeInTheDocument();
  });
  it('should render same text passed into title prop', () => {
    render(<VideoCard value={items[0]} />);
    const headingElement = screen.queryByText(items[0].snippet.description);
    expect(headingElement).toBeInTheDocument();
  });
});
