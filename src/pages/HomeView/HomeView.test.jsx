import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import MockData from '../../utils/related-videos.json';

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
  test('Videos are rendered', async () => {
    const changeUrl = jest.fn();
    const { getAllByRole } = await render(<BrowserRouter><HomeView videos={MockData} changeUrl={changeUrl} /></BrowserRouter>);
    const videos = getAllByRole('video');
    expect(videos.length).toBe(MockData.items.length);
  });
  test('changeUrl is called to fetch data', async () => {
    const changeUrl = jest.fn();
    await render(<HomeView changeUrl={changeUrl} />);
    expect(changeUrl).toHaveBeenCalled();
  });
});
