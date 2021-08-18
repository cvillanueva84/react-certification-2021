import React from 'react';
import { render, screen } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks';
import App from '../components/App/App.component';
import { youtubevideos } from '../mocks/youtubevideos';
import useVideoApi from '../hooks/useVideosAPI';

describe('videos are rendered in home view', () => {

    test('expect loading message to be in screen', async () => {
        const {getByText} = render(<App />);
        const videosLoading = getByText('Loading...');
        expect(videosLoading).toBeInTheDocument();
    });

    test('videos are fetched from API', async () => {
        global.fetch = jest.fn(() => {
            return Promise.resolve({
            json: () => Promise.resolve({items: youtubevideos})
            })
        });
        const { result, waitForNextUpdate } = renderHook(useVideoApi);
        act(() => {
            result.current.fetchVideos('wizeline');
        });
        await waitForNextUpdate();
        console.log(result.current.videos);
        expect(result.current.videos.length).toBe(25);
    });

});