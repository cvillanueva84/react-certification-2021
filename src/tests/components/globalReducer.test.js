import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { GlobalContext } from '../../components/Context';
import { AppRouter } from "../../components/AppRouter";
import { globalReducer } from '../../components/globalReducer';

describe('Test globalReducer', () => {
    const contextValue = {
        dispatch: jest.fn(),
        myStateReducer: {
            mode: 'light',
            search: 'wizeline',
            videoData: {}
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
                    <AppRouter/>
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

    it('should mode light', () => {
        wrapper.find('.toggle_left').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
    });

    it('should initialState', () => {
        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        }, {})
        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        })
    });

    it('should initialState', () => {
        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        }, {})
        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
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
            videoData: {}
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
            videoData: {}
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
                videoData: {}
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        })
    });

    it('should actionAddVideoData', () => {
        const action = {
            type: 'actionAddVideoData',
            payload: {
                mode: 'light',
                search: 'wizeline',
                videoData: {}
            }
        };

        const state = globalReducer({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        }, action);

        expect(state).toEqual({
            mode: 'light',
            search: 'wizeline',
            videoData: {}
        })
    });


});