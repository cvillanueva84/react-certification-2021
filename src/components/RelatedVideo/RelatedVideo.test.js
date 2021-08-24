import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideo from './RelatedVideo.component';

describe('RelatedVideo', () => {
  beforeEach(() => {
    render(
      <RelatedVideo
        image="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
        title="Test title"
      ></RelatedVideo>
    );
  });
  test('should contains a title', () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
