import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"; 

import VideoList from './VideoList.component';

describe('<VideoList />', () => {
  it('Video should render correctly', () => {
    const mockVideo = {
      id: 'video-id',
      title: 'video-title',
      thumbnail: 'video-thumbnail',
      channelTitle: 'video-channel-name',
      isRelated: true,
    };
    const { getByText, getByAltText } = render(<BrowserRouter><VideoList {...mockVideo} /></BrowserRouter>);

    const title = getByText(mockVideo.title);
    const channelTitle = getByText(mockVideo.channelTitle);
    const thumbnail = getByAltText('Video Thumbnail');

    expect(title).toBeDefined();
    expect(thumbnail).toBeDefined();
    expect(channelTitle).toBeDefined();
  });
});
