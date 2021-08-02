import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Header from './Header.component';

describe('<Header />', () => {
  test('Logo is rendered', async () => {
    const changeUrl = jest.fn();
    const { getByTestId } = await render(<BrowserRouter><Header changeUrl={changeUrl}/></BrowserRouter>);
    const image = getByTestId('logo');
    expect(image).toBeDefined();
  });
});
