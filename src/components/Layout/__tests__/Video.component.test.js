import React from 'react';
import { render, screen } from '@testing-library/react'


// Components
import VideoComponent from '../Video.component';

const props = {
    description: 'some text', title: 'title of video', url: '/logo512.png'
}

describe('Video Component', () => {
    it('Should show Video Component', () => {
      const container = render(<VideoComponent {...props}/>)

      expect(container.firstChild).toMatchSnapshot()
    });
    it('Should render the title', () => {
        render(<VideoComponent {...props}/>)

        expect(screen.getByText(props.title)).toBeInTheDocument()
    });
    it('Should render the thumbnail', () => {
        render(<VideoComponent {...props}/>)
        const thumbnail = screen.getByRole('img');

        expect(thumbnail).toHaveAttribute('src','/logo512.png');
    });
    it('Should render the description', () => {
        render(<VideoComponent {...props}/>)

        expect(screen.getByText(props.description)).toBeInTheDocument()
    });
});