import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import CloseIcon from '@material-ui/icons/Close';

import SideMenu, {
  SideMenuContainer,
  MenuItem,
  CloseIconContainer,
  CloseIconSpan,
  MenuSeparator,
} from '../../../components/SideMenu';

describe('SideMenu', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders SideMenu', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders SideMenuContainer', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(SideMenuContainer)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders CloseIconContainer', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(CloseIconContainer)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders CloseIconSpan', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(CloseIconSpan)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders CloseIcon', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(CloseIcon)).toBeDefined();
    wrapper.unmount();
  });

  it('Renders MenuSeparator', () => {
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(MenuSeparator)).toBeDefined();
    wrapper.unmount();
  });

  it('Displays side menu content', () => {
    const textContent = 'This is the side menu :)';
    const wrapper = mount(<SideMenu toggleSideMenu={jest.fn()} />);
    expect(wrapper.find(MenuItem).find('span').text()).toEqual(textContent);
    wrapper.unmount();
  });
});
