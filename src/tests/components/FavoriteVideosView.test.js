import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { GlobalContext } from '../../components/Context';
import { MemoryRouter, Router } from 'react-router';
import { FavoriteVideosView } from "../../components/ui/FavoriteVideosView";


describe('Test Favorite Videos View', () => {
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
                    <FavoriteVideosView />
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
});