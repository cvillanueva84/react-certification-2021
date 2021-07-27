import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content.component';

describe('Content Suite', () => {
  test('Renders correctly the children elements', () => {
    render(<Content>this is a chilren content</Content>);
    const contentElement = screen.queryByText(/this is a chilren content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
