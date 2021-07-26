import React from 'react'
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import Fill from './Fill';

describe('Test Fill', () => {
    it('should render', () => {
        const wrapper = shallow(<Fill/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should dont have videos', () => {
        const wrapper = shallow(<Fill/>);
        const cardItem = wrapper.find('CardItem');
        expect(cardItem.length).toBe(0);
    });

    
});