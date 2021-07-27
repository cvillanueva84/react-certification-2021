import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header.component';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('should contains a search field', () => {
    const searchField = screen.queryByPlaceholderText(/search/i);
    expect(searchField).toBeInTheDocument();
  });
  test('should contains a button', () => {
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
});
