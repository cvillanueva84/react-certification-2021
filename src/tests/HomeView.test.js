import React from 'react';
import { render, screen } from "@testing-library/react";
import App from '../components/App/App.component';

describe('videos are rendered in home view',  () => {

    test('expect loading message to be in screen', async () => {
        const {getByText} = render(<App />);
        const videosLoading = getByText('Loading...');
        expect(videosLoading).toBeInTheDocument();
    });

});