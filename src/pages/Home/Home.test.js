/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { VideoCard } from './Home.styled';
import youtubeData from '../../youtube-videos-mock';

// eslint-disable-next-line import/extensions
import Homepage from './Home.page';

beforeEach(() => {
  render(<Homepage />);
});

describe('Homepage component', () => {
  it('renders a Homepage Component', () => {
    const homepageElement = screen.getAllByText(/wizeline/i)[0];
    expect(homepageElement).toBeInTheDocument();
  });

  it('Homepage Component has an image', () => {
    const imageElement = document.querySelector('.videoCardMedia');
    expect(imageElement).toBeInTheDocument();
  });

  it('Homepage Component has a title', () => {
    const titleElement = document.querySelector('.videoCardTitle');
    expect(titleElement).toBeInTheDocument();
  });

  it('Homepage Component has a description', () => {
    const descriptionElement = document.querySelector('.videoCardDescription');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('all VideoCard components should render with no issue', () => {
    youtubeData.items.map((x) => {
      render(<VideoCard video={x} />);
    });
  });
});
