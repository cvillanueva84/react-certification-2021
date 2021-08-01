import {render, screen} from '@testing-library/react'
import React from 'react'
import ThemeButton from './ThemeButton.component'

test('renders Theme button', () => {
  render(<ThemeButton />)
  const checkBox = screen.queryByRole('checkbox')
  expect(checkBox).toBeInTheDocument()
})
