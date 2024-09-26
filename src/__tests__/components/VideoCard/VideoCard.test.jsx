import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Paper } from '@material-ui/core';

import VideoCard, {
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  VideoDescription,
} from '../../../components/VideoCard';

describe('VideoCard', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders VideoCard', () => {
    const thumbnail = 'img.jpg';
    const title = 'title';
    const description = 'description';
    const videoId = '123456';
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard
          thumbnail={thumbnail}
          title={title}
          description={description}
          videoId={videoId}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Renders Link', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(Link)).toBeDefined();
    wrapper.unmount();
  });

  it('Contains Correct Link', () => {
    const id = 'id';
    const otherId = 'otherId';
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard videoId={id} />
      </BrowserRouter>
    );
    expect(wrapper.find(`a[href="/video/${id}"]`).exists()).toBeTruthy();
    expect(wrapper.find(`a[href="/video/${otherId}"]`).exists()).toBeFalsy();
    wrapper.unmount();
  });

  it('Renders Related Video Card Container', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(Paper)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders VideoThumbnail', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoThumbnail)).toBeDefined();
    wrapper.unmount();
  });

  it('Contains img', () => {
    const title = 'title';
    const imageUrl = 'img.url';
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard title={title} thumbnail={imageUrl} />
      </BrowserRouter>
    );
    expect(wrapper.find(`img[alt="${title}"]`).exists()).toBeTruthy();
    expect(wrapper.find(`img[src="${imageUrl}"]`).exists()).toBeTruthy();
    wrapper.unmount();
  });

  it('Renders VideoInfo', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoInfo)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders VideoTitle', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoTitle)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders VideoTitle', () => {
    const title = 'title';
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard title={title} />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoTitle).text()).toEqual(title);
    wrapper.unmount();
  });

  it('Renders VideoDescription', () => {
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoDescription)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders VideoDescription', () => {
    const description = 'description';
    const wrapper = mount(
      <BrowserRouter>
        <VideoCard description={description} />
      </BrowserRouter>
    );
    expect(wrapper.find(VideoDescription).text()).toEqual(description);
    wrapper.unmount();
  });
});
