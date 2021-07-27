import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home.page';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders items from mock data', () => {
    const cardItems = screen.getAllByRole('article');
    expect(cardItems.length).toEqual(25);
  });
});
