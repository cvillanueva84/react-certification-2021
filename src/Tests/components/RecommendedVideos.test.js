import React from 'react';
import { mount } from 'enzyme';
import RecommendedVideos from '../../components/RecommendedVideos';
import  {VideoListContext}  from '../../providers/VideoList/VideoList.provider.jsx';
import { videoList as videos} from '../mockData/videosList'
import { MemoryRouter } from 'react-router';

describe('Tests of the RecommendedVideos component', () => {

    const wrapper = mount(
    <VideoListContext.Provider
        value={{
            videos
        }}
    >
        <MemoryRouter>
            < RecommendedVideos/>
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
