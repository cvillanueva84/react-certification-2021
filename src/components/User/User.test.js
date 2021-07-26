/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import React from 'react';

import { User } from './User.component';

beforeEach(() => {
  render(<User />);
});

describe('User component', () => {
  it('renders a user avatar or placeholder with an Alt Text', () => {
    const imageAlt = screen.getByAltText('userPicture');
    expect(imageAlt).toBeInTheDocument();
  });
});
