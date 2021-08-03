import React from 'react'
import {shallow} from 'enzyme'
import Home from '../../../pages/Home/Home.page';

describe('Tests of the < HomePage/> component', () => {
    
    const wrapper = shallow(< Home/>)


    test('should show the < HomePage/> component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should contain the SectionContainer styled component', () => {
        expect(wrapper.find('SectionContainer').length).toEqual(1);
    })
    

    test('should contain the VideoListContainer styled component', () => {
        expect(wrapper.find('VideoListContainer').length).toEqual(1);

    })
})
