import React from 'react';
import HomePage from './Home.page';
import SearchTermProvider from '../../providers/SearchTerm';
import { render, screen } from '@testing-library/react';
describe('Home', () => {
  it('Rendiring the home page', () => {
    render(
      <SearchTermProvider>
        <HomePage />
      </SearchTermProvider>
    );
    expect(screen.getByTestId('location-home')).toBeInTheDocument();
  });
});
