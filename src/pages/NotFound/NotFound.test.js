import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFound.page';

describe('Login', () => {
  beforeEach(() => {
    render(<NotFoundPage />);
  });
  test('should contains a input for the username', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
