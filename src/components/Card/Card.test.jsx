import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

describe('Card Suite', () => {
  test('It renders a Card with the title, this is my card', () => {
    render(<Card title="This is my Card" />);
    const titleElement = screen.queryByText(/This is my Card/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('It renders a Card with the description, this is my description', () => {
    render(<Card description="This is my description" />);
    const descElement = screen.queryByText(/This is my description/i);
    expect(descElement).toBeInTheDocument();
  });
});
