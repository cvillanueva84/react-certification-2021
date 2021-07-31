import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header.component';

describe('<Header />', () => {
  test('Logo is rendered', async () => {
    const { getByTestId } = await render(<Header />);
    const image = getByTestId('logo');
    expect(image).toBeDefined();
  });
});
