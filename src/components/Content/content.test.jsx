import React from 'react';
import { screen, render } from '@testing-library/react';
import Content from '.';

describe('Content', () => {
  it('should show a title', () => {
    render(<Content />);
    const title = screen.queryByText(/Welcome to the Challenge!/i);
    expect(title).toBeInTheDocument();
  });
});
