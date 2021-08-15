import React from 'react';
import App from './App.component';
import StoreProvider from '../../state/Store.provider';
import { render, screen } from '@testing-library/react';
describe('App', () => {
  it('Rendiring the home page ', () => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    expect(screen.getByTestId('location-home')).toBeInTheDocument();
  });
});
