import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./Home.page";

describe('Header component testing', () => {

    beforeEach(() => {
        render(
            <Home />
        );
    })

    test('should contains an all videos component', () => {
        const allVideos = screen.queryByTestId("all-videos");
        expect(allVideos).toBeInTheDocument();
    })

})