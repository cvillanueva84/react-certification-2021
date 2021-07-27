import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchInput from './SearchInput.component';

describe('SearchInput component', () => {
  beforeEach(() => {
    render(<SearchInput placeholder="Buscar video" />);
  });

  it('renders correctly', () => {
    const input = screen.getByPlaceholderText(/Buscar video/i);
    expect(input).toBeInTheDocument();
  });
});
