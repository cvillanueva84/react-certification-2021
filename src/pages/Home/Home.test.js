import React from 'react';
import HomePage from './Home.page';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
describe('Home', () => {
  it('Rendiring the home page', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    render(
      <Router history={history}>
        <HomePage />
      </Router>
    );
    expect(screen.getByTestId('location-home')).toHaveTextContent(route);
  });
});
