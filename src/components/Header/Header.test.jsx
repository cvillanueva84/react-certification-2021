import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header', () => {
  test('Header has Dark Mode text', () => {
    render(<Header />);
    const headerElement = screen.queryByText(/Dark Mode/i);
    expect(headerElement).toBeInTheDocument();
  });
});
