import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from './Header';

describe('Test Header', () => {
    it('should has 4 buttons', () => {
        render(<Header />);
        expect(screen.getAllByRole("button").length).toBe(4);
    });

    it('should has placeholder Search...', () => {
        render(<Header />);
        expect(screen.getAllByPlaceholderText("Search...").length).toBe(1);
    });

    it('should has sun', () => {
        render(<Header />);
        expect(screen.getAllByText("🌞").length).toBe(1);
    });

    it('should has moon', () => {
        render(<Header />);
        expect(screen.getAllByText("🌜").length).toBe(1);
    });

    /*
    it('should click', () => {
        const handleClick = jest.fn();
        render(<button onClick={handleClick}></button>);
        fireEvent.click(screen.getAllByText("🌞"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });*/

});