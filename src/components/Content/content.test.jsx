import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '.';

describe('Content', () => {
  it('should render a Object', () => {
    render(<Content />);
    expect(screen).toBeInstanceOf(Object);
  });
});
