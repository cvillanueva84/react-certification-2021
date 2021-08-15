import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header.component';
import StoreProvider from '../../state/Store.provider';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <Header></Header>
        </StoreProvider>
      </BrowserRouter>
    );
  });
  test('should contains a toggle', () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('should contains a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('should change to dark theme ', () => {
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByTestId('darkTheme')).toBeInTheDocument();
  });
  test('should allow letters to be inputted ', () => {
    fireEvent.change(screen.getByLabelText('search-input'), {
      target: { value: 'Name' },
    });
    expect(screen.getByLabelText('search-input').value).toBe('Name');
  });
  test('should change the search term', () => {
    fireEvent.submit(screen.getByTestId('form-form'));
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
