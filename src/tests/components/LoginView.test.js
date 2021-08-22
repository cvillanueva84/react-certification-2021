import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { GlobalContext } from '../../components/Context';
import { MemoryRouter, Router } from 'react-router';
import { LoginView } from '../../components/LoginView';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Test Login View', () => {
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
                    <LoginView />
                </Router>
            </MemoryRouter>
        </GlobalContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    const initialForm = {
        textUser: 'Wizeline',
        textPass: 'Rocks!',
      };

    it('should render success', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists());
    });

    it('should Login', () => {
        const e = {preventDefault: jest.fn()};
        window.alert = () => {};
        const { result } =  renderHook(() => useForm(initialForm));
        const [formValues ] = result.current;
        console.log(formValues);
        wrapper.find('button').prop('onClick')(e);
    });

    it('should Login Google', () => {
        window.alert = () => {};
        wrapper.find('img').simulate('click');
    });
    
});