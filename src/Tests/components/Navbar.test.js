import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar/Navbar.component'

describe('Tests of the Navbar component', () => {
    const wrapper = shallow(< Navbar/>)
    test('should render the Navbar component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})

