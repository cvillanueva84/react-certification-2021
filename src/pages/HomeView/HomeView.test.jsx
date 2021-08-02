import React from 'react';
import { render } from '@testing-library/react';

import HomeView from './HomeView.page';

describe('<HomeView />', () => {
  test('Section Title is rendered', async () => {
    const changeUrl = jest.fn();
    const { getAllByText } = await render(<HomeView changeUrl={changeUrl} />);
    const text = getAllByText('For You');
    expect(text).toBeDefined();
  });
  test('Video Container is rendered', async () => {
    const changeUrl = jest.fn();
    const { getByTestId } = await render(<HomeView changeUrl={changeUrl} />);
    const container = getByTestId('videos');
    expect(container).toBeDefined();
  });
  test('changeUrl is called to fetch data', async () => {
    const changeUrl = jest.fn();
    await render(<HomeView changeUrl={changeUrl} />);
    expect(changeUrl).toHaveBeenCalled();
  });
});
