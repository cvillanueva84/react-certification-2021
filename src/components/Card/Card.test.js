import React from 'react';
import { render, screen } from '@testing-library/react';
import CardVideo from './Card.component';

describe('Card video', () => {
  beforeEach(() => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <CardVideo
        key="test"
        name="test title"
        description="test description"
        image="test image"
      />
    );
  });

  test('This should be rendered a card', () => {
    expect(screen.getByText('test title')).toBeTruthy();
  });
  test('This should be rendered a description', () => {
    expect(screen.getByText('test description')).toBeTruthy();
  });
  test('This should be rendered an image', () => {
    expect(screen.getByAltText('NO IMAGE')).toBeTruthy();
  });
});
