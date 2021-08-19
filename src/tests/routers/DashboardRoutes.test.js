import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { AppRouter } from '../../routers/AppRouter';
import { GlobalContext } from '../../components/Context';

describe('Test Dashboard Routes', () => {
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
        },
    };
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    };


    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should ', () => {
        const wrapper = mount(
            <GlobalContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Router history={historyMock}>
                        <AppRouter />
                    </Router>
                </MemoryRouter>
            </GlobalContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });
});