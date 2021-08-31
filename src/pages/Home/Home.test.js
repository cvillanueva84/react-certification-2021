import React from 'react';
import HomePage from './Home.page';
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
