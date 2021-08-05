import React from 'react';
import { render, screen } from '@testing-library/react';
import MainView from './Main.component';

describe('MainView', () => {
  beforeEach(() => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <MainView />
    );
  });
  test('This should be rendered a main view', () => {
    expect(screen.getByText('Welcome to the Challenge!')).toBeTruthy();
  });
  test('This should be rendered a list mock cards', () => {
    expect(screen.getByText('Welcome to the Challenge!')).toBeTruthy();
  });
});
