import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from '.';

describe('render Header', () => {
  it('should render Header with bottom Dark mode', () => {
    render(<Header />);
    expect(screen.queryByText(/Dark mode/)).toBeInTheDocument();
  });
});
