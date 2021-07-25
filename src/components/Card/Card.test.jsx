import React from 'react';
import '@testing-library/jest-dom';
import { prettyDOM, render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const component = render(<Card />);
  it('must be have a img tag', () => {
    const img = component.container.querySelector('img');
    console.log(prettyDOM(img));
    expect(img).toBeDefined();
  });
});
