import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const component = render(<Card />);
  it('must be have an img tag', () => {
    const img = component.container.querySelector('img');
    expect(img).toBeDefined();
  });
});
