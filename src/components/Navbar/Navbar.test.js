import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar.component';

describe('navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('should contains a title', () => {
    const title = screen.queryByText(/wizetube/i);

    expect(title).toBeInTheDocument();
  });

  test('should contains a profile picture', () => {
    const picture = screen.queryByRole('img');

    expect(picture).toBeInTheDocument();
  });

  test('should contains a search input', () => {
    const input = screen.queryByPlaceholderText(/search/i);

    expect(input).toBeInTheDocument();
  });

  test('should contains a search button', () => {
    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
  });
});
