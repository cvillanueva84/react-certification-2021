import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HomeView from './HomeView.component';

describe('HomeView', () => {
  it('Renders HomeView', () => {
    const { container } = render(<HomeView />);
    const homeViewComponent = container.querySelector('.home-view-container');
    expect(homeViewComponent).toBeInTheDocument();
  });

  it('Renders mock video cards', () => {
    const { container } = render(<HomeView />);
    const videoCardsElements = container.querySelector('.video-card');
    expect(videoCardsElements).toBeInTheDocument();
  });
});
