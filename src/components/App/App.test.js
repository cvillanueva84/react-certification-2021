import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "../Header/Header.component";
import HomePage from "../../pages/Home/Home.page";
import { BrowserRouter } from 'react-router-dom';

describe('App testing', () => {

    test('should render header component', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
        const header = screen.queryByTestId("header");
        expect(header).toBeInTheDocument();
    })

    test('should render home page component', () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>);
        const homePage = screen.queryByTestId("home-page");
        expect(homePage).toBeInTheDocument();
    })
})
