import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

describe('Testing App component.', () => {
  test('Rendering correctly.', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
