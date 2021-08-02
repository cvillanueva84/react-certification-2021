import React from 'react';
import { render } from '@testing-library/react';

import VideoMain from './VideoMain.component';

import MockData from '../../utils/video-data.json';

const Data = MockData.items[0];


describe('<VideoMain />', () => {
  test('VideoMain is rendered', async () => {
    const { getByRole } = await render(<VideoMain video={Data}/>);
    const iframe = getByRole('iframe');
    expect(iframe).toBeDefined();
  });
  test('Tags are rendered', async () => {
    const { getAllByRole } = await render(<VideoMain video={Data}/>);
    const tags = getAllByRole('tag');
    expect(tags.length).toBe(Data.snippet.tags.length);
  });
});
