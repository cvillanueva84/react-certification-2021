import React from 'react';

import { render, screen } from '@testing-library/react';

import { VideoData } from '../../mock/VideoData'; 

import Video from '../../components/Video'; 

beforeEach(() => render(<Video />))

describe("Videos List", () => {
    it('select the first Video and test if the info is correctly rendered', () => {
        const video1 = VideoData[0];

        console.log(video1.snippet.title);
    
        render(
            <Video
            title={video1.snippet.title}
            imagen={video1.snippet.thumbnails.medium.url}
            description={video1.snippet.description}
            key={video1.etag}
          />
        );
        expect(
          screen.queryByText('Wizeline')
        ).toBeTruthy();
      });
  })


