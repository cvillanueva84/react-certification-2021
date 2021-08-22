import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { GlobalContext } from '../../components/Context';
import { FavItem } from "../../components/FavItem";
import { FavVideoDetailsScreen } from '../../components/FavVideoDetailsScreen';


describe('Test Fav Video Details Screen', () => {
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
                    <FavVideoDetailsScreen>
                        <FavItem />
                    </FavVideoDetailsScreen>
                </Router>
            </MemoryRouter>
        </GlobalContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render success ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });

    it('should have elements', () => {
        expect(wrapper.getElements(".video-details").length).toBe(1);
        expect(wrapper.getElements("frame").length).toBe(1);
        expect(wrapper.getElements(".video-details-text").length).toBe(1);
        expect(wrapper.getElements("h2").length).toBe(1);
        expect(wrapper.getElements("p").length).toBe(1);
        expect(wrapper.getElements(".contenedor-sugeridos").length).toBe(1);
    });
});