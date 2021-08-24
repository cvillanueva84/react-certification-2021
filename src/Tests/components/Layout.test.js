import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout/LayoutComponent';
import Navbar from '../../components/Navbar/NavbarComponent';

jest.mock('../../components/Navbar/NavbarComponent', () => 'Navbar')

describe('Test of the Layout component', () => {
    let children =  Navbar
    let wrapper = shallow( < Layout children={children} />)
    
    test('main container should be rendered correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('main tag should contain the container className', () => {
        const mainContainer = wrapper.find('LayoutContainer')
        expect(mainContainer.exists()).toBe(true)
    })
    
    test('Layout component should display the received props inside the main tag', () => {
        const mainTag = wrapper.find('LayoutContainer').text()
        expect(mainTag).toBe(children)
    })
    
    
})
