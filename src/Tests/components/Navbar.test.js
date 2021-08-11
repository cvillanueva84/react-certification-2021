import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../components/Navbar/Navbar.component'
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { MemoryRouter } from 'react-router';

describe('Tests of the Navbar component', () => {
    
    const setSearch = jest.fn()
    let wrapper;
    beforeEach(() =>  {
        jest.clearAllMocks();
        wrapper = mount(
            <VideoListContext.Provider
                value={{
                    setSearch
                }}
            >
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </VideoListContext.Provider>)
    });

    test('should render the Navbar component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should have an styled input tag', () => {
        const styledInput = wrapper.find('InputText')
        const value = 'React!'
        styledInput.simulate('change', {
            target: {
                value
            }
        })
        expect(styledInput.length).toBe(1)
    })
    test('should post info on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setSearch).toHaveBeenCalled()
    })
    
    test('should call setSearch and clean the input text ', () => {
        const value = 'learn jest'
        wrapper.find('InputText').simulate('change', { target: {value}})
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setSearch).toHaveBeenCalled()
        expect(wrapper.find('InputText').prop('value')).toBe('')

    })
    
    
})

