import React from 'react';
import { render } from '@testing-library/react';

import VideoList from './VideoList.component';

describe('<VideoList />', () => {
  it('Video should render correctly', () => {
    const mockVideo = {
      id: 'video-id',
      title: 'video-title',
      thumbnail: 'video-thumbnail',
      channelTitle: 'video-channel-name',
    };
    const { getByText, getByAltText } = render(<VideoList title={mockVideo.title} thumbnail={mockVideo.thumbnail} channelTitle={mockVideo.channelTitle} />);

    const title = getByText(mockVideo.title);
    const channelTitle = getByText(mockVideo.channelTitle);
    const thumbnail = getByAltText('Video Thumbnail');

    expect(title).toBeDefined();
    expect(thumbnail).toBeDefined();
    expect(channelTitle).toBeDefined();
  });
});
