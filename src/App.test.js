/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './components/App';

// The App renders correctly
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
// The App renders correctly, again...
it("App renders 'Mini-Challenge' message", () => {
  render(<App />);
  expect(screen.getByText(/Mini-Challenge/)).toBeInTheDocument();
});
