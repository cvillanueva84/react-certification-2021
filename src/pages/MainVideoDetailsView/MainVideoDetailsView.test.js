import React from 'react';
import MainVideoDetailsView from './MainVideoDetailsView.page';
import { render, screen, fireEvent, act } from '@testing-library/react';
import StoreProvider from '../../state/Store.provider';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      videoTitle: 'tittle',
      videoDescription: 'description',
    },
  }),
  useParams: () => ({
    id: 'id',
  }),
}));

describe('MainVideoDetailsView', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <Header></Header>
          <MainVideoDetailsView />
        </StoreProvider>
      </BrowserRouter>
    );
  });
  it('Rendiring the video details view page', () => {
    expect(screen.getByTestId('location-videoDetailsView')).toBeInTheDocument();
  });
  it('should change the action of the button', async () => {
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
    fireEvent.click(screen.getByTestId('favoritesBtn'));
    expect(screen.getByText('Remove from favorites')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('favoritesBtn'));
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });
});
