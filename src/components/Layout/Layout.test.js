import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout', () => {
  beforeEach(() => {
    render(<Layout></Layout>);
  });
  test('should contains a page', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
