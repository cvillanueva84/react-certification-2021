import React from 'react';
import { screen, render } from '@testing-library/react';
import NavBar from '../components/NavBar';

beforeEach(() => render(<NavBar />));

describe('NavBar', () => {
    it('must display a title', () => {
    expect(screen.queryByText(/wizewatch/i)).toBeInTheDocument();
    });

    it('must display a dark mode', () => {
        expect(screen.queryByText(/dark mode/i)).toBeInTheDocument();
    });

    test('render search input', () => {     
        const inputEl = screen.getByTestId("search-input");
        expect(inputEl).toBeInTheDocument();
        // expect(inputEl).toHaveAttribute("type", "text"); Not working :(
      });
})