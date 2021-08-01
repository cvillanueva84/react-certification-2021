import {render, screen} from '@testing-library/react'
import React from 'react'
import { VideoCard } from './Video.component'

test('renders card', () => {
  render(<VideoCard />)
  const cardText = screen.queryAllByText(/Wizeline/)
  const cardImage = screen.queryAllByRole('img')
  const cardContent = screen.queryAllByRole('button')
  expect(cardText.length).toBeGreaterThan(0)
  expect(cardImage.length).toBeGreaterThan(0)
  expect(cardContent.length).toBeGreaterThan(0)
})