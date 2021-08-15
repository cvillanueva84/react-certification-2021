import React from 'react';
import VideoDetailsView from './VideoDetailsView.page';
import { render, screen } from '@testing-library/react';
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

describe('VideoDetailsView', () => {
  it('Rendiring the video details view page', () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <VideoDetailsView />
        </StoreProvider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('location-videoDetailsView')).toBeInTheDocument();
  });
});
