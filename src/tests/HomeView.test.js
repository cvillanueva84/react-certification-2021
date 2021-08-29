import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks';
import App from '../components/App/App.component';
import NavBar from '../components/NavBar';
import { youtubevideos } from '../mocks/youtubevideos';
import useVideoApi from '../hooks/useVideosAPI';

global.fetch = jest.fn(() => { //This is the mock for the fetching functionality that retrieves videos
    return Promise.resolve({
    json: () => Promise.resolve({items: youtubevideos})
    })
});

describe('videos are rendered in home view', () => {

    test('expect loading message to be in screen', async () => {
        const {getByText} = render(<App />);
        const videosLoading = getByText('Loading...');
        expect(videosLoading).toBeInTheDocument();
    });

    test('videos are fetched from API', async () => {
        const { result, waitForNextUpdate } = renderHook(useVideoApi);
        act(() => {
            result.current.fetchVideos('wizeline');
        });
        await waitForNextUpdate();
        //console.log(result.current.videos);
        expect(result.current.videos.length).toBe(25);
    });

    test('search input textfield is updated and its value stored in globalcontext', () => {
        render(<App />);
        fireEvent.change(screen.getByPlaceholderText("Search"), {target: {value: 'react'}});
        //Clicking on the search button updates the global state, in this case the search criteria,
        //known in the state as searchText
        fireEvent.click(screen.getByText("Search")); 
        //The search input field now has to have the default value of react
        expect(screen.getByDisplayValue("react")).toBeInTheDocument(); 
        
    });

});