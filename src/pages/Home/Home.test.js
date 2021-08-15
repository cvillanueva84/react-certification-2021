import React from 'react';
import HomePage from './Home.page';
import StoreProvider from '../../state/Store.provider';
import { render, screen } from '@testing-library/react';
describe('Home', () => {
  it('Rendiring the home page', () => {
    render(
      <StoreProvider>
        <HomePage />
      </StoreProvider>
    );
    expect(screen.getByTestId('location-home')).toBeInTheDocument();
  });
});
