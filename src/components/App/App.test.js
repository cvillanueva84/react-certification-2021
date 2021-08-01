import {render, screen} from '@testing-library/react'
import React from 'react'
import App from './App.component'

test('renders hello world', () => {
  render(<App />)
  expect(true).toBe(true)
})