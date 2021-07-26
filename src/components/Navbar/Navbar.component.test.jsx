import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar.component'

test('Properly render navbar', () => {
    render(<Navbar />)

    const searchBar = screen.queryByText(/Search/i)

    expect(searchBar).toBeInTheDocument()
})