import React from 'react';
import { render } from '@testing-library/react';

import HomeView from './HomeView.page';

describe('<HomeView />', () => {
  test('Section Title is rendered', async () => {
    const { getAllByText } = await render(<HomeView />);
    const text = getAllByText('For You');
    expect(text).toBeDefined();
  });

  test('Video Container is rendered', async () => {
    const { getByTestId } = await render(<HomeView />);
    const container = getByTestId('videos');
    expect(container).toBeDefined();
  });
});
