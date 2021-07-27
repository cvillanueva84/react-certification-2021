import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Renders Dark mode option', () => {
  test('renders hello world', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<App />);
    const darkMode = screen.getByText(/Dark mode/i);
    expect(darkMode).toBeInTheDocument();
  });
});
