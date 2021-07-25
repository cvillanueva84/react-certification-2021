import React from 'react';
import { render } from '@testing-library/react';

import VideoHome from './VideoHome.component';

describe('<VideoHome />', () => {
  it('Video should render correctly', () => {
    const mockVideo = {
      id: 'video-id',
      title: 'video-title',
      thumbnail: 'video-thumbnail',
      channelTitle: 'video-channel-name',
    };
    const { getByText, getByAltText } = render(<VideoHome title={mockVideo.title} thumbnail={mockVideo.thumbnail} channelTitle={mockVideo.channelTitle} />);

    const title = getByText(mockVideo.title);
    const channelTitle = getByText(mockVideo.channelTitle);
    const thumbnail = getByAltText('Video Thumbnail');

    expect(title).toBeDefined();
    expect(thumbnail).toBeDefined();
    expect(channelTitle).toBeDefined();
  });
});
