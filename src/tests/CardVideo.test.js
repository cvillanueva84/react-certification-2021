import { render, screen } from "@testing-library/react";
import * as React from 'react';
import StyledCardVideo from '../components/CardVideo';
import { youtubevideos } from '../mocks/youtubevideos';

describe('video cards are rendered', () => {

    //Test for checking that the video cards are rendered
    test('should render the video cards', () => {
        
        youtubevideos.forEach((video, index) => {
            render(<StyledCardVideo
                    key={index} 
                    title={video.snippet.title} 
                    description={video.snippet.description} 
                    picture={video.snippet.thumbnails.medium.url} 
                />);
            
            //Check that at least one of the rendered elements has in its content the card's title
            //defined in the youtube-videos-mock file
            const videoTitle = screen.getAllByText(video.snippet.title, {exact: false});
            //Checks that the array of selected elements has at least one item
            expect(videoTitle.length).toBeGreaterThanOrEqual(1);
        });
    });
});