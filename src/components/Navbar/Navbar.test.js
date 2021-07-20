import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Filter video', () => {
  test('This should be rendered a filter', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Navbar />
    );
    expect(screen.getByText('dark mode')).toBeTruthy();
  });
});
