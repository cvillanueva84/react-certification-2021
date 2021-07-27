import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from "../../pages/Home/Home.page";
import AllVideos from "./AllVideos.component";
import videos from '../../mocks/youtube-videos.json';

describe('All Videos testing', () => {

    beforeEach(() => {
        render(
            <AllVideos />
        );
    })

    test('should contains a title', () => {
        const title = screen.queryByText(/videos/i);
        expect(title).toBeInTheDocument();
    })

    test('Should render all videos from videos mockup', () => {
        const previewListElement = screen.queryByTestId("video-card");

        const numOfChilds = previewListElement.childElementCount;
        const numOfVideos = videos.items.length;

        expect(numOfChilds).toBe(numOfVideos);
    });

})