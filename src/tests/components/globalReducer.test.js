import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { GlobalContext } from '../../components/Context';
import { AppRouter } from "../../routers/AppRouter";
import { globalReducer } from '../../components/globalReducer';

describe('Test globalReducer', () => {
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
                    <AppRouter />
                </Router>
            </MemoryRouter>
        </GlobalContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });


    it('should initialState', () => {
        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, {})
        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should initialState', () => {
        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, {})
        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionLightMode', () => {
        const action = {
            type: 'actionLightMode',
            payload: {
                mode: 'light'
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
        })
    });

    it('should actionDarkMode', () => {
        const action = {
            type: 'actionDarkMode',
            payload: {
                mode: 'dark'
            }
        };

        const state = globalReducer({
            mode: 'dark',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'dark',
        })
    });

    it('should actionAddSearch', () => {
        const action = {
            type: 'actionAddSearch',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: '',
                logged: false,
                favorites: [],
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionAddVideoData', () => {
        const action = {
            type: 'actionAddVideoData',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: '',
                logged: false,
                favorites: [],
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionAddVideoDataFav', () => {
        const action = {
            type: 'actionAddVideoDataFav',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: '',
                logged: false,
                favorites: [],
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionAddFavorites', () => {
        const action = {
            type: 'actionAddFavorites',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: '',
                logged: false,
                favorites: [],
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionDelete', () => {
        const action = {
            type: 'actionDelete',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {},
                videoDataFav: {},
                user: '',
                logged: false,
                favorites: [],
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        })
    });

    it('should actionLogin', () => {
        const action = {
            type: 'actionLogin',
            payload: {
                logged: true
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            logged: true,
        })
    });

    it('should actionLoginGoogle', () => {
        const action = {
            type: 'actionLoginGoogle',
            payload: {
                logged: true
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            logged: true,
        })
    });

    it('should actionLogout', () => {
        const action = {
            type: 'actionLogout',
            payload: {
                logged: false,
                user: '',
                videoDataFav: {},
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {},
            videoDataFav: {},
            user: '',
            logged: false,
            favorites: [],
        }, action);

        expect(state).toEqual({
            logged: false,
            user: '',
            videoDataFav: {},
        })
    });


});