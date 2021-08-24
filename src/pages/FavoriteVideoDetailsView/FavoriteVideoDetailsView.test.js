import React from 'react';
import FavoriteVideoDetailsView from './FavoriteVideoDetailsView.page';
import { render, screen, fireEvent } from '@testing-library/react';
import StoreProvider from '../../state/Store.provider';
import { BrowserRouter } from 'react-router-dom';

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

describe('FavoriteVideoDetailsView', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <FavoriteVideoDetailsView />
        </StoreProvider>
      </BrowserRouter>
    );
  });
  it('Rendiring the favorite video details view page', () => {
    expect(screen.getByTestId('location-FavoriteVideoDetailsView')).toBeInTheDocument();
  });
  it('should change the action of the button', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Remove from favorites')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });
});
