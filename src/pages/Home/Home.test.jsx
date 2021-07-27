import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './Home.page';

beforeEach(() => {
  render(<HomePage />);
});

describe('Home page', () => {
  test('Should contain Title and List of Videos', () => {
    const previewListElement = screen.queryByTestId(/list-videos/i);

    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
    expect(previewListElement).toBeInTheDocument();
  });
});
