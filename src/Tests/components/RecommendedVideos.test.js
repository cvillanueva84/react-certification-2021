import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import RecommendedVideos from '../../components/RecommendedVideos';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { videosState } from '../mockData/videosList';



describe('Tests of the RecommendedVideos component', () => {
    const { posts } = videosState

    const wrapper = mount(

        <VideoListContext.Provider
            value={{
                posts
            }}
            >
            <MemoryRouter>
                < RecommendedVideos videos={posts}/>
            </MemoryRouter>
        </VideoListContext.Provider>
    )

    

    test('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should display all of the videos passed', () => {
        let videos = wrapper.find('recommended-video__card')
        expect(videos.length).toBe(videos.length)
    })


    
})
