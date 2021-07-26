import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './Header.component';

describe('Header', () => {
  it('Renders header', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('Contains side menu', () => {
    const { container } = render(<Header />);
    const sideMenuComponent = container.querySelector('.side-menu-container');
    expect(sideMenuComponent).toBeInTheDocument();
  });

  it('Contains search bar', () => {
    const { container } = render(<Header />);
    const searchBarComponent = container.querySelector('.search-bar');
    expect(searchBarComponent).toBeInTheDocument();
  });

  it('Search bar contains input text', () => {
    const { container } = render(<Header />);
    const searchBarComponent = container.querySelector('.search-bar');
    const inputTextElement = searchBarComponent.querySelector("input[type='text']");
    expect(inputTextElement).toBeInTheDocument();
  });

  it('Search bar contains input button', () => {
    const { container } = render(<Header />);
    const searchBarComponent = container.querySelector('.search-bar');
    const headerElement = searchBarComponent.querySelector("button[type='button'");
    expect(headerElement).toBeInTheDocument();
  });

  it('Contains profile menu', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('.profile-menu-container');
    expect(headerElement).toBeInTheDocument();
  });
});
