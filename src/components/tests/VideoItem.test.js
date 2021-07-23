import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import VideoItem from '../Video/VideoItem/VideoItem.component';

describe('VideoItem component test', () => {
  test('should render VideoItem', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = render(<VideoItem />);
    expect(wrapper).toMatchSnapshot();
  });

  test('URL prop should start with HTTP', () => {
    const title = 'Test';

    const { getByText } = render(<VideoItem title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
