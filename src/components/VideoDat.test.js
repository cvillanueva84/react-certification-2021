import React from "react";
import { render, screen } from "@testing-library/react";
import { VideoDat } from "./VideoDat";

describe('Test VideoDat', () => {
    const title = 'title';
    const description = 'description'

    it('should render h2', () => {
        render(<VideoDat title={title} description={description} />);
        expect(screen.getByText('title')).toBeTruthy();
    });

    it('should render p', () => {
        render(<VideoDat  title={title} description={description} />);
        expect(screen.getByText("description")).toBeTruthy();
    });

    it('should without element', () => {
        render(<VideoDat/>);
        expect(screen.queryByText("Title")).toBeFalsy();
    });
});