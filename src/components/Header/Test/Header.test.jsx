import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header.component';

describe('Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header />);
    const h1Element = screen.getByTestId('header-1');
    expect(h1Element).toBeInTheDocument();
  });
});
