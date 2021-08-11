import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout/Layout.component';
import Navbar from '../../components/Navbar/Navbar.component';
jest.mock('../../components/Navbar/Navbar.component', () => 'Navbar')

describe('Test of the Layout component', () => {
    let children =  Navbar
    let wrapper = shallow( < Layout children={children} />)
    
    test('main container should be rendered correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('main tag should contain the container className', () => {
        const mainContainer = wrapper.find('main')
        expect(mainContainer.hasClass('container')).toBe(true)
    })
    
    test('Layout component should display the received props inside the main tag', () => {
        const mainTag = wrapper.find('main').text()
        expect(mainTag).toBe(children)
    })
    
    
})
