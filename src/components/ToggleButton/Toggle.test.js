import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton.component';

describe('Checkbox ', () => {
  test('This should be rendered a checkbox', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <ToggleButton />
    );
    expect(screen.getByText('dark mode')).toBeTruthy();
  });
});
