import { mount } from 'enzyme/build';
import React from 'react';
import LoginModal from '../../../pages/Login/LoginModal';
import AuthProvider from '../../../providers/Auth';


describe('Tests of the Login Modal component', () => {

    let wrapper; 
     // add a div with #portal id to the global body
    const portalRoot = global.document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    const body = global.document.querySelector('body');
    body.appendChild(portalRoot);
    afterEach(() => {
        wrapper.unmount();
    });

    const login = jest.fn()
    const onClose = jest.fn()
    wrapper = mount(
        <AuthProvider
            value={{
                login
            }}
        >
            < LoginModal
                open={false}
                onClose={onClose}
            />
        </AuthProvider>
    )    

    test('Should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    
})
