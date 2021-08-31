import React from 'react';
import { render } from '@testing-library/react';
import VideosContainer from '../../components/VideosContainer';
import { data } from '../../data/youtube-videos-mock';

describe('Testing VideosContainer component.', () => {
  test('Rendering correctly.', () => {
    const container = render(<VideosContainer {...data} />);

    expect(container).toMatchSnapshot();
  });
});
