import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';
import ThemeProvider from '../../providers/Theme';
import SearchTermProvider from '../../providers/SearchTerm';

describe('Header', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <SearchTermProvider>
          <Header></Header>
        </SearchTermProvider>
      </ThemeProvider>
    );
  });
  test('should contains a toggle', () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('should contains a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
