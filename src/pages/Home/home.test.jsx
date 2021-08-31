import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '.';

describe('render Title', () => {
  it('should render Title welcome', () => {
    render(<Home />);
    expect(screen.queryByText(/Welcome to the Challenge!/i)).toBeInTheDocument();
  });
});
