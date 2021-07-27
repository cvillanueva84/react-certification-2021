import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList';

beforeEach(() => render(<VideoList />));

describe('VideoList', () => {
  it('must display a title', () => {
    expect(screen.queryByText(/welcome to the challenge!/i)).toBeInTheDocument();
  });
});
