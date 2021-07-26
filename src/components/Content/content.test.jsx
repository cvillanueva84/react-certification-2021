import React from 'react';
import { render, screen } from '@testing-library/react';

import Content from '.';

describe('Content', () => {
  beforeEach(() => {
    render(<Content />);
  });

  test('should contain title', () => {
    const titleElement = screen.getByText(/WZTube/i);

    expect(titleElement).toBeInTheDocument();
  });

  test('should render items from mock data', () => {
    const cardItems = screen.getAllByRole('article');

    expect(cardItems.length).toEqual(25);
  });
});
