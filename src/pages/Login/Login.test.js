import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './Login.page';

describe('Login', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });
  test('should contains a input for the username', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
