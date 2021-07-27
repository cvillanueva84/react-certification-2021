import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

beforeEach(() => render(<Navbar />));
describe('Navbar', () => {
  it('must display a home text', () => {
    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
  });
  it('must display a Dark mode text', () => {
    expect(screen.queryByText(/dark mode/i)).toBeInTheDocument();
  });
  it('should contain Search input', () => {
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
});
