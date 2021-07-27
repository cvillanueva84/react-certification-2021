import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout Suite', () => {
  test('Renders correctly the children elements', () => {
    render(<Layout>this is a chilren content</Layout>);
    const contentElement = screen.queryByText(/this is a chilren content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
