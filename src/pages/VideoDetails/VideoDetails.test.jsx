import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';
import Video from './VideoDetails.page';

const location = {
  pathname: '/video/nmXMgqjQzls',
  state: {
    videoTitle: 'Wizeline',
    videoDescription: 'Wizeline transforms how teams build technology.',
    image:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
  },
};

describe('<Video />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <MemoryRouter initialEntries={[location]}>
          <Video />
        </MemoryRouter>
      </AppProvider>
    );
  });

  test('Render Video Template Page', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Render a Video card with info: title', () => {
    const title = screen.getByText(location.state.videoTitle);
    expect(title).toBeInTheDocument();
  });
  test('Render a Video card with info: description', () => {
    const descriptionElement = screen.getByText(location.state.videoDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
  test('Aside Section should be empty', () => {
    const asideSection = screen.getByTestId('relatedVideos');
    expect(asideSection.firstChild).toBeEmptyDOMElement();
  });
});
describe('Change initial state, user logged', () => {
  const state = {
    search: 'wizeline',
    sessionData: {
      id: 'user1',
      username: 'user1',
    },
    logged: true,
    videos: [],
    darkMode: true,
  };

  beforeEach(() => {
    cleanup();
    render(
      <AppContext.Provider value={{ state }}>
        <MemoryRouter initialEntries={[location]}>
          <Video />
        </MemoryRouter>
      </AppContext.Provider>
    );
  });
  test('Dark mode', () => {
    const mainElement = screen.getByTestId('videoDetails-page');
    expect(mainElement).toHaveClass('bg-dark');
  });
  test('button save video', () => {
    const buttonFav = screen.getByText('Add Favorite');
    expect(buttonFav).toBeInTheDocument();
    fireEvent.click(buttonFav);
  });
});
