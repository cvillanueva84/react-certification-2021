import React from 'react';
import { render, screen  } from '@testing-library/react'

import HeaderComponent from '../Header.component';

describe('Header Component', () => {
    it('Should show HeaderComponent', () => {
     const container = render(<HeaderComponent />)
     
      expect(container.firstChild).toMatchSnapshot()
    });
    it('Should render the input', () => {
      render(<HeaderComponent />)

      expect(screen.getByPlaceholderText('Wizeline')).toBeInTheDocument()
    });
    it('Should render the Toggle Button', () => {
      render(<HeaderComponent />)

      expect(screen.getByTitle('toggle-button')).toBeInTheDocument()
    });
    it('Should render the logo', () => {
      render(<HeaderComponent />)
      const logo = screen.getByAltText('Logo');

      expect(logo).toHaveAttribute('src','session_out.png');
    });
    it('Should render the Menu Toggle', () => {
      render(<HeaderComponent />)

      expect(screen.getByTitle('menu-toggle')).toBeInTheDocument()
    });
});