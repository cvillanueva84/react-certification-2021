import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';
import SearchTermProvider from '../../providers/SearchTerm';
import ThemeProvider from '../../providers/Theme';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <SearchTermProvider>
          <Layout></Layout>
        </SearchTermProvider>
      </ThemeProvider>
    );
  });
  test('should contains a page', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
