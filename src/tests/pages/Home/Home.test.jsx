import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from '../../../pages/Home';


describe('Mini Challenge 2', () => {
    it("must display the main page title", () => {
        render( <Home /> )
        expect(
            screen.getByRole("heading", {name:/Welcome to the Challenge!/i})).toBeInTheDocument()
    })

    
})
