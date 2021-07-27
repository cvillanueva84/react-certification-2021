import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Home from './Home.page';

describe('render Title', () => {
  test('should render Title', () => {
    render(<Home />);
    const titleElement = screen.queryByText(/First React Mini-challenge/i);

    expect(titleElement).toBeInTheDocument();
  });
});
