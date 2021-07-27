import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('<Header />', ()=>{    
    test('Render Header component', ()=>{
        render(<Header />)
    });
    test('Search', () => {
        render(<Header />);
        const search = screen.getByPlaceholderText(/Search/i);
        expect(search).toBeInTheDocument();
    });
    test('Dark Mode', () => {
        render(<Header />);
        const darkMode = screen.getByText(/Dark Mode/i);
        expect(darkMode).toBeInTheDocument();
    });
});

