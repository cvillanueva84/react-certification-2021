import React from 'react';
import FavoriteVideosViewPage from './FavoriteVideosView.page';
import StoreProvider from '../../state/Store.provider';
import { render, screen } from '@testing-library/react';

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

describe('FavoriteVideosView', () => {
  it('Rendiring the FavoriteVideosView page', () => {
    render(
      <StoreProvider>
        <FavoriteVideosViewPage />
      </StoreProvider>
    );
    expect(screen.getByTestId('location-FavoriteVideosViewPage')).toBeInTheDocument();
  });
});
