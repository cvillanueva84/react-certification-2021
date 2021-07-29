/* eslint-disable react/jsx-filename-extension */

import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App.component';

beforeEach(() => {
  render(<App />);
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
});
