import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Filter video', () => {
  beforeEach(() => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Navbar />
    );
  });
  test('This should be rendered a filter', () => {});
});
