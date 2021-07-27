import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content.component';

describe('Content component', () => {
  it('renders correctly children elements', () => {
    render(<Content>This is a child</Content>);
    const child = screen.queryByText(/This is a child/i);
    expect(child).toBeInTheDocument();
  });
});
