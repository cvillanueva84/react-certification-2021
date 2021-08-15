import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';
import StoreProvider from '../../state/Store.provider';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <Layout></Layout>
      </StoreProvider>
    );
  });
  test('should contains a page', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
