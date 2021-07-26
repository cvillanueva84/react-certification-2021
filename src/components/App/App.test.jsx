import React from 'react'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import App from "./App.component";


describe('Test App component', () => {
    const wrapper = shallow(<App/>)

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have HomeView', () => {
        const header = wrapper.find('HomeView');
        expect(header.length).toEqual(1);
        
    });
});