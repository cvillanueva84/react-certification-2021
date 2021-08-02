import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar.component';

describe('Navbar', () => {
  test('should contain search input', () => {
    render(<Navbar />);

    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  test('should contain search button', () => {
    render(<Navbar />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should contain logo on navbar', () => {
    render(<Navbar />);

    const altText = 'Wizeline Academy logo';
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });
});
