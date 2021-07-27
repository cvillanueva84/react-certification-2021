import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar.component';

describe('Navbar', () => {
  test('should contain search input', () => {
    render(<Navbar />);

    const searchInput = screen.getByPlaceholderText(/Search/i);

    expect(searchInput).toBeInTheDocument();
  });

  test('should contain search button', () => {
    render(<Navbar />);

    const searchButton = screen.queryByRole('button');

    expect(searchButton).toBeInTheDocument();
  });

  test('should contain search input', () => {
    render(<Navbar />);

    const imageAlt = screen.getByAltText('Wizeline Academy logo');
    expect(imageAlt).toBeInTheDocument();
  });
});
