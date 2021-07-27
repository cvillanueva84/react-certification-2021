import {render, screen} from '@testing-library/react'
import React from 'react'
import MenuButton from './MenuButton.component'

test('renders Search bar', () => {
  render(<MenuButton />)
  const button = screen.queryByRole('button')
  const div = screen.queryAllByTestId(/burger/)
  expect(button).toBeInTheDocument()
  expect(div.length).toBe(3)
})
