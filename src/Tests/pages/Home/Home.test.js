import React from 'react'
import { mount} from 'enzyme'
import HomePage from '../../../pages/Home/Home.page';
import { VideoListContext } from '../../../providers/VideoList/VideoList.provider';
import { videoList as videos} from '../../mockData/videosList'

describe('Tests of the < HomePage/> component', () => {
    
    const wrapper = mount(
        <VideoListContext.Provider
            value={{
                videos
            }}
        >
            < HomePage/>
        </VideoListContext.Provider>)


    test('should show the < HomePage/> component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should contain the SectionContainer styled component', () => {
        expect(wrapper.find('SectionContainer').length).toEqual(1);
    })
    

    test('should contain the VideoListContainer styled component', () => {
        expect(wrapper.find('VideoListContainer').length).toEqual(1);

    })
})
