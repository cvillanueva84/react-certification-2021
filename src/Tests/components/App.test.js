import React from 'react';
import { mount } from "enzyme";
import App from "../../components/App/AppComponent";
window.scrollTo = jest.fn();

describe('tests of the App component', () => {
    let wrapper = mount(< App/>)
    test('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should have a videoList Provider', () => {
        let videoListProvider = wrapper.find('VideoListProvider')
        expect(videoListProvider.length).toBe(1)
    })
    
    test('should have a Navbar component', () => {
        let navbar = wrapper.find('Navbar')
        expect(navbar.length).toBe(1)
    })

    test('should have a HomePage component', () => {
        let homePage = wrapper.find('HomePage')
        expect(homePage.length).toBe(1)
    })
    
})
