import React from 'react'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import HomeView from "./HomeView.page";

describe('Test HomeView', () => {
    it('should render', () => {
        const wrapper = shallow(<HomeView/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should have header', () => {
        const wrapper = shallow(<HomeView/>);
        const header = wrapper.find('Header');
        expect(header.length).toEqual(1);
        
    });

    it('should have fill', () => {
        const wrapper = shallow(<HomeView/>);
        const fill = wrapper.find('Fill');
        expect(fill.length).toEqual(1);
    });
});