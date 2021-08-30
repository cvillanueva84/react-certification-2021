import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
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
  test('should change to light theme again ', () => {
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByTestId('lightTheme')).toBeInTheDocument();
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
  test('should show the LogMenu modal', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('should close the LogMenu modal', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu-close'));
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });
  test('should show the Login modal', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu'));
    expect(screen.getByText('username')).toBeInTheDocument();
  });
  test('should close the Login modal with the Cancel button', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });
  test('should show a error with an incorrect username or password', async () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu'));
    //Insert userma
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'asa' },
    });
    //Insert password
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'Rasocks!' },
    });
    jest.useFakeTimers();
    await act(async () => {
      fireEvent.click(screen.getByTestId('LoginButton'));
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('errormessage')).toBeInTheDocument();
  });
  test('should close the Login modal with the correct username & password', async () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu'));
    //Insert userma
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'wizeline' },
    });
    expect(screen.getByTestId('username').value).toBe('wizeline');
    //Insert password
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'Rocks!' },
    });
    expect(screen.getByTestId('password').value).toBe('Rocks!');
    jest.useFakeTimers();
    await act(async () => {
      fireEvent.click(screen.getByTestId('LoginButton'));
      jest.advanceTimersByTime(1000);
    });
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });
  test('should show the Login option after Logout', async () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByTestId('Logmenu'));
    //Insert userma
    fireEvent.change(screen.getByTestId('username'), {
      target: { value: 'wizeline' },
    });
    //Insert password
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'Rocks!' },
    });
    jest.useFakeTimers();
    await act(async () => {
      fireEvent.click(screen.getByTestId('LoginButton'));
      jest.advanceTimersByTime(1000);
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Logout')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('Logmenu'));
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
