import React from 'react';
import '@testing-library/jest-dom';
import { mount, render } from 'enzyme';
import { GlobalContext } from '../../components/Context';
import { MemoryRouter, Router } from 'react-router';
import { FavItem } from '../../components/FavItem';

describe('Test FavItem', () => {
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
                    <FavItem />
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
        expect(wrapper.find('button').length).toBe(2);
    });

    it('should dispatch videodetailsfavs', () => {
        wrapper.find('a').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalled();
    });

    it('should dispatch actionDelete', () => {
        wrapper.find('#delete').simulate('click')
        expect(contextValue.dispatch).toHaveBeenCalled();
    });

});