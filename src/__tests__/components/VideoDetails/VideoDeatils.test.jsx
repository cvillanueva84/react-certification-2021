import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import VideoDetails, {
  VideoDetailsView,
  VideoPlayer,
  VideoDetailsContainer,
  RelatedVideosContainer,
} from '../../../pages/VideoDetails';

describe('VideoDetails', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders VideoDetails Page', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Contains VideoDetailsView', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoDetailsView)).toBeDefined();
    wrapper.unmount();
  });

  it('Contains VideoDetailsContainer', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoDetailsContainer)).toBeDefined();
    wrapper.unmount();
  });

  it('Contains Video Player', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoPlayer)).toBeDefined();
    expect(wrapper.find('#player')).toBeDefined();
    expect(wrapper.find('iframe')).toBeDefined();
    wrapper.unmount();
  });

  it('Displays Video Title', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find('.video-detail-title')).toBeDefined();
    expect(wrapper.find('h2')).toBeDefined();
    wrapper.unmount();
  });

  it('Displays Video Description', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find('.video-detail-description')).toBeDefined();
    wrapper.unmount();
  });

  it('Contains RelatedVideosContainer', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoDetails />
      </BrowserRouter>
    );
    expect(wrapper.find(RelatedVideosContainer)).toBeDefined();
    wrapper.unmount();
  });
});
