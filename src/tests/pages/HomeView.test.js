import React from 'react';
import { render } from '@testing-library/react';
import HomeView from '../../pages/HomeView';

describe('Testing HomeView component.', () => {
  test('Rendering correctly.', () => {
    const homeview = render(<HomeView />);

    expect(homeview).toMatchSnapshot();
  });
});
