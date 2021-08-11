import React from 'react';
import { mount } from 'enzyme/build';
import VideoDetails from '../../components/VideoDetails/VideoDetails.component';
import { MemoryRouter, Route } from 'react-router';
import { videoList as videos } from '../mockData/videosList'
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';

describe('Tests of the VideoDetials component', () => {
    const wrapper = mount( 
        <VideoListContext.Provider
            value={{videos}}
        >
            <MemoryRouter
                initialEntries={['/video/Po3VwR_NNGk']}
                >
                <Route path="/video/:id" >
                    <VideoDetails />
                </Route> 
            </MemoryRouter>
        </VideoListContext.Provider>)

       test('should display the component correctly', () => {
         expect(wrapper).toMatchSnapshot()  
       })
        

})
