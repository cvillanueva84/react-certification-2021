import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

describe('VideoCard component', () => {
  beforeEach(() => {
    render(
      <VideoCard
        title="I've got this"
        channelTitle="Tuneame la nave"
        publishedAt="2019-09-30T23:54:32Z"
      />
    );
  });

  it('renders a Card with the title, "I\'ve got this"', () => {
    const title = screen.queryByText(/I've got this/i);
    expect(title).toBeInTheDocument();
  });

  it('renders a VideoCard with channel title, "Tuneame la nave"', () => {
    const channelTitle = screen.queryByText(/Tuneame la nave/i);
    expect(channelTitle).toBeInTheDocument();
  });

  // TODO: Find out why in test enviroment the date shows in english even
  // if 'mx-ES' option is provided
  it('renders publishedAt date with format "MM dd, YYYY"', () => {
    const publishedAt = screen.queryByText(/September 30, 2019/i);
    expect(publishedAt).toBeInTheDocument();
  });
});
