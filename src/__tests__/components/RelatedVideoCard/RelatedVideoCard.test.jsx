import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Paper } from '@material-ui/core';

import RelatedVideoCard, {
  RelatedVideo,
  RelatedVideoThumbnail,
  RelatedVideoTitle,
} from '../../../components/RelatedVideoCard';

describe('RelatedVideoCard', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders VideoDetails Page', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders Link', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(Link)).toBeDefined();
  });

  it('Contains Correct Link', () => {
    const id = 'id';
    const otherId = 'otherId';
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard videoId={id} />
      </BrowserRouter>
    );
    expect(wrapper.find(`a[href="/video/${id}"]`).exists()).toBeTruthy();
    expect(wrapper.find(`a[href="/video/${otherId}"]`).exists()).toBeFalsy();
  });

  it('Renders Related Video Card Container', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(Paper)).toBeDefined();
  });

  it('Renders RelatedVideo', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(RelatedVideo)).toBeDefined();
  });

  it('Renders RelatedVideoThumbnail', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(RelatedVideoThumbnail)).toBeDefined();
  });

  it('Contains img', () => {
    const title = 'title';
    const imageUrl = 'img.url';
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard title={title} imageUrl={imageUrl} />
      </BrowserRouter>
    );
    expect(wrapper.find(`img[alt="${title}"]`).exists()).toBeTruthy();
    expect(wrapper.find(`img[src="${imageUrl}"]`).exists()).toBeTruthy();
  });

  it('Renders RelatedVideoTitle', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RelatedVideoCard />
      </BrowserRouter>
    );
    expect(wrapper.find(RelatedVideoTitle)).toBeDefined();
  });
});
