import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Header from './Header.component';

describe('<Header />', () => {
  test('Logo is rendered', async () => {
    const changeUrl = jest.fn();
    const { getByTestId } = await render(<BrowserRouter><Header changeUrl={changeUrl}/></BrowserRouter>);
    const image = getByTestId('logo');
    expect(image).toBeDefined();
  });
  test('Toggle and search works', async () => {
    const changeUrl = jest.fn();
    const { getAllByRole, getByPlaceholderText } = await render(<BrowserRouter><Header changeUrl={changeUrl}/></BrowserRouter>);

    // Toggle Search
    const toggle = getAllByRole('toggle')[1];
    fireEvent(
      toggle,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    // Get Input & write
    const input = getByPlaceholderText('Search');
    fireEvent.change(input, {target: {value: 'a'}})

    // Search
    const searchButton = getAllByRole('toggle')[1];
    fireEvent(
      searchButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(input).toBeDefined();
    expect(changeUrl).toHaveBeenCalled();
  });
  test('Search no text', async () => {
    const changeUrl = jest.fn();
    const { getAllByRole, getByPlaceholderText } = await render(<BrowserRouter><Header changeUrl={changeUrl}/></BrowserRouter>);

    // Toggle Search
    const toggle = getAllByRole('toggle')[1];
    fireEvent(
      toggle,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    // Get Input & write
    const input = getByPlaceholderText('Search');

    // Search
    const searchButton = getAllByRole('toggle')[1];
    fireEvent(
      searchButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(input).toBeDefined();
    expect(changeUrl).not.toHaveBeenCalled();
  });
});
