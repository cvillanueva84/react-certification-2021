import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from "react-router";
import { GlobalContext } from "../components/Context";
import { MainApp } from "../../src/MainApp";


describe('Test MainApp', () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should render success lightTheme', () => {
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
                        <MainApp/>
                    </Router>
                </MemoryRouter>
            </GlobalContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });

    it('should render success darkTheme', () => {
        const contextValue = {
            dispatch: {
                mode: 'dark',
            },
            myStateReducer: {
                mode: 'dark',
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
                        <MainApp/>
                    </Router>
                </MemoryRouter>
            </GlobalContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });
});