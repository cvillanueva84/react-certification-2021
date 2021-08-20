import { mount } from 'enzyme/build';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import VideoDetails from '../../components/VideoDetails/VideoDetailsComponent';
import AuthProvider from '../../providers/Auth';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { videosState } from '../mockData/videosList';

describe('Tests of the VideoDetials component', () => {
    const authenticated = true

    const wrapper = mount( 
        <AuthProvider
            value={{
                authenticated
            }}
        >
        <VideoListContext.Provider
            value={{videosState}}
            >
            <MemoryRouter
                initialEntries={['/video/Po3VwR_NNGk']}
                >
                <Route path="/video/:id" >
                    <VideoDetails />
                </Route> 
            </MemoryRouter>
        </VideoListContext.Provider>
        </AuthProvider>)

       test('should display the component correctly', () => {
         expect(wrapper).toMatchSnapshot()  
       })
        

})
