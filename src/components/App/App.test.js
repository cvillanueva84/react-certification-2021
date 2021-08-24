import React from 'react';
import App from './App.component';
import StoreProvider from '../../state/Store.provider';
import { render, screen, fireEvent } from '@testing-library/react';
describe('App', () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
  });
  it('Rendiring the home page ', () => {
    expect(screen.getByTestId('location-home')).toBeInTheDocument();
  });
  test('should change to dark theme ', () => {
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByTestId('darkTheme')).toBeInTheDocument();
  });
});
