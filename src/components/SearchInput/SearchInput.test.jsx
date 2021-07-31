import React from 'react';
import { render } from '@testing-library/react';

import SearchInput from './SearchInput.component';

describe('<SearchInput />', () => {
  test('Search bar is rendered', async () => {
    const { getByPlaceholderText } = await render(<SearchInput />);
    const searchBar = getByPlaceholderText('Search');
    expect(searchBar).toBeDefined();
  });
});
