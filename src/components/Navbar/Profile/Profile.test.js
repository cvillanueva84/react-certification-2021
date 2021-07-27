import {render, screen} from '@testing-library/react'
import React from 'react'
import Profile from './Profile.component'

test('renders Search bar', () => {
  render(<Profile />)
  const div = screen.queryByTestId('profile-pic')
  expect(div).toBeInTheDocument()
})
