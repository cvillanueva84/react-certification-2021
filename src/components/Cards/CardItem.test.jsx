import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardItem } from './Navbar.component'

test('Properly render navbar', () => {
    render(<CardItem />)
})