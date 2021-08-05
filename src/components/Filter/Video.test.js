import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterVideo from './Video.component';

describe('Filter video', () => {
  test('This should be rendered a filter', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <FilterVideo />
    );
    expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
  });
});
