import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProfileMenu from './ProfileMenu.component';

describe('ProfileMenu', () => {
  it('Renders ProfileMenu', () => {
    const { container } = render(<ProfileMenu className="" />);
    const sideMenuComponent = container.querySelector('.profile-menu-container');
    expect(sideMenuComponent).toBeInTheDocument();
  });

  it('Is ProfileMenu active', () => {
    const { container } = render(<ProfileMenu className="active" />);
    const activeSideMenu = container.querySelector('.active');
    expect(activeSideMenu).toBeInTheDocument();
  });

  it('Displays theme toggle', () => {
    const { container } = render(<ProfileMenu className="" />);
    const toggle = container.querySelector('.toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('Contains checkbox', () => {
    const { container } = render(<ProfileMenu className="" />);
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
  });

  it('Contains slider', () => {
    const { container } = render(<ProfileMenu className="" />);
    const slider = container.querySelector('.slider');
    expect(slider).toBeInTheDocument();
  });

  it('Displays sign out', () => {
    render(<ProfileMenu className="active" />);
    const signOutElement = screen.getByText('Sign out');
    expect(signOutElement).toBeInTheDocument();
  });
});
