import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SideMenu from './SideMenu.component';

describe('SideMenu', () => {
  it('Renders SideMenu', () => {
    const { container } = render(<SideMenu className="" />);
    const sideMenuComponent = container.querySelector('.side-menu-container');
    expect(sideMenuComponent).toBeInTheDocument();
  });

  it('Is sideMenu active', () => {
    const { container } = render(<SideMenu className="active" />);
    const activeSideMenu = container.querySelector('.active');
    expect(activeSideMenu).toBeInTheDocument();
  });

  it('Displays side menu content', () => {
    render(<SideMenu className="active" />);
    const sideMenuComponent = screen.getByText('This is the side menu :)');
    expect(sideMenuComponent).toBeInTheDocument();
  });
});
