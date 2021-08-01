import {render, screen} from '@testing-library/react'
import React from 'react'
import SearchBar from './SearchBar.component'

test('renders Search bar', () => {
  render(<SearchBar />)
  const iconSearch = screen.queryByTestId('search-icon')
  const iconCancel = screen.queryByTestId('search-cancel')
  const input = screen.queryByTestId('search-input')
  expect(iconSearch).toBeInTheDocument()
  expect(iconCancel).toBeInTheDocument()
  expect(input).toBeInTheDocument()
})
