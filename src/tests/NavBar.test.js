import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import App from '../components/App/App.component';
import * as React from 'react';

describe('Tests for checking elements in home page', () => {

    test('Check that search input field is rendered', () => {
        render(<App />);

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    /*test('toogle checkbox for switching modes', () => {
        render(<NavBar.LightNavBar />);
        expect(screen.getByLabelText("DarkMode")).toBeInTheDocument();
    });*/

    test('Home element is rendered in the navbar', () => {
        render(<App />);
        expect(screen.getByLabelText("menu")).toBeInTheDocument();
    });

    /*test('Login element is rendered in the navbar', () => {
        render(<NavBar.LightNavBar />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });*/


});