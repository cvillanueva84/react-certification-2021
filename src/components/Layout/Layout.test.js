import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';
import StoreProvider from '../../state/Store.provider';
import { BrowserRouter } from 'react-router-dom';
describe('Layout', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <Layout></Layout>
        </StoreProvider>
      </BrowserRouter>
    );
  });
  test('should contains a page', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
