import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';

describe('Testing NavBar component.', () => {
  const navbar = render(<NavBar />);

  test('Rendering correctly.', () => {
    expect(navbar).toMatchSnapshot();
  });
});
