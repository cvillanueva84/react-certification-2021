import React from 'react';
import { render, screen } from '@testing-library/react';
import MainView from './Main.component';

describe('MainView', () => {
  test('This should be rendered a main view', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <MainView />
    );
    expect(screen.getByText('Welcome to the Challenge!')).toBeTruthy();
  });
});
