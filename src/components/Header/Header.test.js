import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header', () => {
  beforeEach(() => {
    render(<Header></Header>);
  });
  test('should contains a toggle', () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('should contains a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
