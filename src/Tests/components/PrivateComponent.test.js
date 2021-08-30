import { mount } from "enzyme"
import React from 'react';
import { MemoryRouter } from "react-router";
import Private from "../../components/Private/PrivateComponent";
import AuthProvider from '../../providers/Auth';

describe('PrivateRoute tests', () => {
    let authenticated = true
    const wrapper = mount(
        <AuthProvider
            value={{
                authenticated
            }}
        >
            <MemoryRouter
                initialEntries={['/favorite-videos']}
            >
                <Private 
                    component={() => <span>test</span>}
                />
            </MemoryRouter>
        </AuthProvider>)


    test('Should render a component if the user is authenticated', () => {
        expect(wrapper.find('span').exists()).toBe(true)
    })
    
})
