import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFound.page';

describe('NotFound', () => {
  beforeEach(() => {
    render(<NotFoundPage />);
  });
  test('should contains a image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
