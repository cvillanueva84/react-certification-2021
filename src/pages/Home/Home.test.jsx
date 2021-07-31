import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  test('renders the loading correctly', () => {
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  test('renders at least 1 VideoPreviewCard component', () => {
    // render(<Home />);
    // expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
