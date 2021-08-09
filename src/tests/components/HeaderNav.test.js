import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { HeaderNav } from '../../components/HeaderNav';
import { GlobalContext } from '../../components/Context';
//import { render, screen, fireEvent } from "@testing-library/react";

describe('Test HeaderNav', () => {
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
                    <HeaderNav/>
                </Router>
            </MemoryRouter>
        </GlobalContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })
    
    it('should render success', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });

    it('should have 3 bottons', () => {
        expect(wrapper.find('button').length).toBe(3);
    });

    it('should have left-header', () => {
        expect(wrapper.getElements("left-header").length).toBe(1);
    });

    it('should have right-header', () => {
        expect(wrapper.getElements("left-right").length).toBe(1);
    });

    it('should have box_input', () => {
        expect(wrapper.getElements("box_input").length).toBe(1);
    });

    it('should mode light', () => {
        wrapper.find('.toggle_left').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
    });

    it('should mode dark', () => {
        wrapper.find('.toggle_right').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
    });

    it('should Submit', () => {
        wrapper.find('input').simulate('submit');
        expect(contextValue.dispatch).toHaveBeenCalled();
    });


    /*
    it('should has 4 buttons', () => {
        render(<HeaderNav />);
        expect(screen.getAllByRole("button").length).toBe(4);
    });

    it('should has placeholder Search...', () => {
        render(<HeaderNav />);
        expect(screen.getAllByPlaceholderText("Search...").length).toBe(1);
    });

    it('should has sun', () => {
        render(<HeaderNav />);
        expect(screen.getAllByText("🌞").length).toBe(1);
    });

    it('should has moon', () => {
        render(<HeaderNav />);
        expect(screen.getAllByText("🌜").length).toBe(1);
    });

    
    it('should click', () => {
        const handleClick = jest.fn();
        render(<button onClick={handleClick}></button>);
        fireEvent.click(screen.getAllByText("🌞"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });*/

});