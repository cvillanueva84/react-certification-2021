import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header.component";

describe('Header component testing', () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    })

    test('should contains a title', () => {
        const title = screen.queryByText(/pentax/i);
        expect(title).toBeInTheDocument();
    })

    test('should contains an image with alt=logo and src', () => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', '/images/video-camera.png');
        expect(image).toHaveAttribute('alt', 'logo');
    })

    test('should contains an input', () => {
        const input = screen.queryByTestId("input-header");
        expect(input).toBeInTheDocument();
    })

    test('should contains an input with placeholder=Search here', () => {
        const input = screen.queryByTestId("input-header");
        expect(input).toHaveAttribute('placeholder', 'Search here');
    })

    test('should contains a switch', () => {
        const switchHeader = screen.queryByTestId("switch-header");
        expect(switchHeader).toBeInTheDocument();
    })

    test('should contains a login button', () => {
        const login = screen.queryByTestId("login-header");
        expect(login).toBeInTheDocument();
    })
})