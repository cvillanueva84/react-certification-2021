import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

beforeEach(() => {
  render(<Layout />);
});

describe('Layout component', () => {
  test('Should contain Header', () => {
    const headerElement = screen.queryByTestId(/headerBar/i);
    expect(headerElement).toBeInTheDocument();
  });
});
