import React from 'react';
import { render, screen } from '@testing-library/react';
import Video from './Video.component';

test('Renders card button', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<Video />);
  const cardButton = screen.getByText(/Go to video/i);
  expect(cardButton).toBeInTheDocument();
});
