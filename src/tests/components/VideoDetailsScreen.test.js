import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { VideoDetailsScreen } from '../../components/VideoDetailsScreen';
import { GlobalContext } from '../../components/Context';
import { CardItem } from '../../components/CardItem';

describe('Test VideoDetailsScreen', () => {
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
                    <VideoDetailsScreen>
                        <CardItem/>
                    </VideoDetailsScreen>
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
        expect(wrapper.getElements(".video-details").length).toBe(1);
        expect(wrapper.getElements("frame").length).toBe(1);
        expect(wrapper.getElements(".video-details-text").length).toBe(1);
        expect(wrapper.getElements("h2").length).toBe(1);
        expect(wrapper.getElements("p").length).toBe(1);
        expect(wrapper.getElements(".contenedor-sugeridos").length).toBe(1);
    });


    it('should dispatch addFavorite', () => {
        wrapper.find('#addFavorite').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalled();
    });



});