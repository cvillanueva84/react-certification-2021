import React from 'react';
import { render, screen } from '@testing-library/react';
import CardVideo from './Video.component';

describe('Card video', () => {
  test('This should be rendered a card', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <CardVideo
        key="test"
        name="test title"
        description="test description"
        image="test image"
      />
    );
    expect(screen.getByText('test title')).toBeTruthy();
  });
});
