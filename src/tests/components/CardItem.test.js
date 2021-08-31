import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { CardItem } from '../../components/CardItem';
import { GlobalContext } from '../../components/Context';
import { MemoryRouter, Router } from 'react-router';


describe('Test CardItem', () => {
    const contextValue = {
        dispatch: jest.fn(),
        myStateReducer: {
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }
    }
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const wrapper = mount(
        <GlobalContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <CardItem/>
                </Router>
            </MemoryRouter>
        </GlobalContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render success', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });

    it('should have elements', () => {
        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('should dispatch actionAddVideoData', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
    });


    

    // it('should render provided properties', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it('should render img', () => {
    //     const img = wrapper.find('img');
    //     expect(img.prop('src')).toBe(url);
    //     expect(img.prop('alt')).toBe(title);
    // });

    // it('should render h2', () => {
    //     const h2 = wrapper.find('h2');
    //     expect(h2.text().trim()).toBe(title);
    // });

    // it('should render p', () => {
    //     const p = wrapper.find('p');
    //     expect(p.text().trim()).toBe(description);
    // });

    // it('should have className Css', () => {
    //     const div = wrapper.find('div');
    //     const className = div.prop('className');
    //     expect(className.includes('card-item')).toBe(true);
    // });
    
});