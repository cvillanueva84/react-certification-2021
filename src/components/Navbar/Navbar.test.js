import {render, screen} from '@testing-library/react'
import React from 'react'
import Navbar from './Navbar.component'

test('renders navbar lists', () => {
  render(<Navbar />)
  const listItems = screen.queryAllByRole('listitem')
  const lists = screen.queryAllByRole('list')
  expect(lists.length).toBe(2)
  expect(listItems.length).toBe(4)
})
