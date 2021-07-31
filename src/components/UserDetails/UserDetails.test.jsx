import React from 'react';
import { render } from '@testing-library/react';

import UserDetails from './UserDetails.component';

describe('<UserDetails />', () => {

  test('User Details are rendered', async () => {
    const { getAllByText } = await render(<UserDetails />);
    const name = getAllByText('Example Name');
    const email = getAllByText('example@example.com');
    expect(name).toBeDefined();
    expect(email).toBeDefined();
  });

  test('Profile Picture is rendered', async () => {
    const { getByTestId } = await render(<UserDetails />);
    const avatar = getByTestId('avatar');
    expect(avatar).toBeDefined();
  });

});
