import React from 'react';
import {render, screen} from '@testing-library/react';

import Header from '../Header'

describe('header', () => {

  beforeEach(() => {
    render(<Header />)
  })

  test('should contain control fro dark mode theme', () => {
    const darkModeToggle = screen.getByRole('checkbox')

    expect(darkModeToggle).toBeInTheDocument()
  })

  test('should contain search input', () => {
    const inputSearchEl = screen.getByPlaceholderText(/Search.../i)

    expect(inputSearchEl).toBeInTheDocument()
  })
})