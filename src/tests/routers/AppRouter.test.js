import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { AppRouter } from '../../routers/AppRouter';
import { GlobalContext } from '../../components/Context';

describe('Test AppRouter', () => {
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

    it('should render', () => {
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

    it('should render with authentication ', () => {
        const contextValue = {
            dispatch: jest.fn(),
            myStateReducer: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: 'Wizeline',
                logged: true,
                favorites: [],
            },
        };

        const wrapper = mount(
            <GlobalContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Router history={historyMock}>
                        <AppRouter />
                    </Router>
                </MemoryRouter>
            </GlobalContext.Provider>
        );
        expect(wrapper.find('h1').exists()).toBe(true);
        expect(wrapper.find('span').exists()).toBe(true);
    });
});
