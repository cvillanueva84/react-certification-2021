import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EnzymeToJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import Header, { HeaderElement } from '../../../components/Header';

describe('Header', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('Renders header', () => {
    const header = mount(
      <BrowserRouter>
        <Header setIsSideMenuActive={jest.fn()} handleSubmit={jest.fn()} />
      </BrowserRouter>
    );
    expect(EnzymeToJson(header)).toMatchSnapshot();
    header.unmount();
  });

  it('Renders HeaderElements', () => {
    const header = shallow(
      <Header setIsSideMenuActive={jest.fn()} handleSubmit={jest.fn()} />
    );
    expect(header.find(HeaderElement).length).toBeDefined();
  });

  it('Contains Home Link', () => {
    const header = shallow(
      <Header setIsSideMenuActive={jest.fn()} handleSubmit={jest.fn()} />
    );
    expect(header.find('a')).toBeDefined();
    expect(header.find('a[href="/"]')).toBeDefined();
  });

  it('Contains Search Bar', () => {
    const header = shallow(
      <Header setIsSideMenuActive={jest.fn()} handleSubmit={jest.fn()} />
    );
    expect(header.find('.search-bar')).toBeDefined();
    expect(header.find('input[type="/"]')).toBeDefined();
    expect(header.find('button[type="button"]')).toBeDefined();
  });
});
