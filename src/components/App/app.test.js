/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import React from 'react';

import { App } from './App.component';
import HomePage from '../../pages/Home';

beforeEach(() => {
  render(<App />);
  render(<HomePage />);
});

describe('App component', () => {
  it('renders a search input with a placeholder', () => {
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders a User Component with an avatar', () => {
    const userAvatar = screen.getByAltText('userPicture');
    expect(userAvatar).toBeInTheDocument();
  });

  it('renders a Home View for the videos', () => {
    const homeView = document.querySelector('.homepage');
    expect(homeView).toBeInTheDocument();
  });

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
});
