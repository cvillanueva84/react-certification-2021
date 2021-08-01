import React from 'react'
import '@testing-library/jest-dom';
import { VideoDetails } from './VideoDetails';
import { render, screen } from "@testing-library/react";

describe('Test VideoDetails', () => {

    it('should has sun', () => {
        render(<VideoDetails />);
        expect(screen.getAllByText("🌞").length).toBe(1);
    });

    it('should has moon', () => {
        render(<VideoDetails />);
        expect(screen.getAllByText("🌜").length).toBe(1);
    });
});