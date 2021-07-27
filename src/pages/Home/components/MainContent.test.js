import { render } from "@testing-library/react";
import React from "react";
import MainContent from './MainContent';

describe('MainContent', () => {
    test('Should create a container for main content', () => {
        const item = render(<MainContent />)
        const homeContainer = item.container.querySelector('.homeDiv')
        expect(homeContainer).toBeDefined()
    })

    test('Should create a container to render items', () => {
        const item = render(<MainContent />)
        const homeContainer = item.container.querySelector('.homeContainer')
        expect(homeContainer).toBeDefined()
    })
})