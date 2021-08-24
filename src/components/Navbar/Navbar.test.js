import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar.component';
import StoreProvider from '../../state/Store.provider';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <Navbar></Navbar>
        </StoreProvider>
      </BrowserRouter>
    );
  });
  test('should show the list of options', () => {
    fireEvent.click(screen.getByTestId('menu'));
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
