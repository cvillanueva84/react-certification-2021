import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Test Header', () => {
    const wrapper = shallow(<Header/>);


    it('should render provided properties', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render input', () => {
        const buttons = wrapper.find('input');
        expect(buttons.length).toBe(1);
    });

    it('should render spans', () => {
        const buttons = wrapper.find('span');
        expect(buttons.length).toBe(3);
    });

    it('should render spans', () => {
        const buttons = wrapper.find('i');
        expect(buttons.length).toBe(3);
    });

    it('should Them Mode', () => {
        const theme = wrapper.find('ThemeProvider');
        expect(theme.length).toBe(0);
    });

    it('should Them Mode', () => {
        const styles = wrapper.find('GlobalStyles');
        expect(styles.length).toBe(0);
    });

});