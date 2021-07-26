import React from 'react';
import { render, screen } from '@testing-library/react';
import Videocard from './Videocard.component';
import YoutubeVideos from '../../mock/youtube-videos-mock.json';

const video = YoutubeVideos.items[0];

describe('Videocard tests', () => {
  test('should render videocard', () => {
    render(<Videocard video={video} />);
    const VideoImage = screen.getByAltText('video');
    const VideoTitle = screen.getByText(video.snippet.title);
    const VideoDesc = screen.getByText(video.snippet.description);
    expect(VideoImage).toBeInTheDocument();
    expect(VideoTitle).toBeInTheDocument();
    expect(VideoDesc).toBeInTheDocument();
  });
});
