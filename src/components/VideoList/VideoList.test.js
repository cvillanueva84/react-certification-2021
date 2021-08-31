import React from 'react';
import { render, screen } from '@testing-library/react';

import AppState from '../../context/State/state';

import VideoList from './index';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: {
      pathname: 'test',
    },
  }),
}));

beforeEach(() => {
  const mockState = {
    darkMode: false,
    handleDarkMode: jest.fn(),
  };

  render(
    <AppState value={mockState}>
      <VideoList />
    </AppState>
  );
});

describe('VideoList', () => {
  test('should contains a Loading text', () => {
    const loadingText = screen.queryByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});

describe('VideoList', () => {
  test('should contains a Welcome to the Challenge! text', () => {
    const loadingText = screen.queryByText('Welcome to the Challenge!');
    expect(loadingText).toBeInTheDocument();
  });
});
