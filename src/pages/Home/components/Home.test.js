import { render, screen } from "@testing-library/react";

import HomePage from '../Home.page';
describe('ListItem', () => {
    test('Should create a container for home page', () => {
        const item = render(HomePage())
        const homeContent = item.container.querySelector('.homepage')
        expect(homeContent).toBeDefined()
    })

    test('Should contain a title', () => {
        render(HomePage())
        const homeContent = screen.queryByText(/Welcome to the challenge/i)
        expect(homeContent).toBeInTheDocument()
    })

    test('Should create a container for main content', () => {
        const item = render(HomePage())
        const homeContent = item.container.querySelector('.contentDiv')
        expect(homeContent).toBeDefined()
    })
})