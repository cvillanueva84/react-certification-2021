import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HomeView } from '../../components/ui/HomeView';

describe('Test HomeView', () => {
    it('should render', () => {
        const wrapper = shallow(<HomeView/>);
        expect(wrapper).toMatchSnapshot();
    });
});