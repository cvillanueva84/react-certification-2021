import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomeView, { HomeViewContainer } from '../../../components/HomeView';

describe('HomeView', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders HomeView', () => {
    const wrapper = mount(<HomeView youtubeData={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Renders HomeViewContainer', () => {
    const wrapper = mount(<HomeView youtubeData={{}} />);
    expect(wrapper.find(HomeViewContainer)).toBeDefined();
    wrapper.unmount();
  });
});
