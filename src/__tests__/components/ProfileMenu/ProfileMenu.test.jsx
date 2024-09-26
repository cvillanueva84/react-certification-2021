import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import ProfileMenu from '../../../components/ProfileMenu';

describe('ProfileMenu', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders ProfileMenu', () => {
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={jest.fn()} />
    );
    expect(profileMenu).toMatchSnapshot();
  });

  it('Renders Menu', () => {
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={jest.fn()} />
    );
    expect(profileMenu.find('#profile-menu')).toBeDefined();
  });

  it('Renders Change Theme Checkbox', () => {
    const profileMenu = mount(
      <ProfileMenu isProfileMenuActive={null} closeMenu={jest.fn()} />
    );
    expect(profileMenu.find('label')).toBeDefined();
    expect(profileMenu.find('input[type="checkbox"]')).toBeDefined();
    expect(profileMenu.find('.slider')).toBeDefined();
  });
});
