import React from 'react';
import { render } from '@testing-library/react';

import SideBar from './SideBar.component';

describe('<SideBar />', () => {
  test('Options are rendered', async () => {
    const { getByTestId } = await render(<SideBar />);
    const options = getByTestId('options');
    expect(options).toBeDefined();
  });

  test('Option elements are rendered', async () => {
    const { getAllByText } = await render(<SideBar />);
    const element = getAllByText('Settings');
    expect(element).toBeDefined();
  });
});
