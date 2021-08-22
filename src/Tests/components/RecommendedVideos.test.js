import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import RecommendedVideos from '../../components/RecommendedVideos';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';



describe('Tests of the RecommendedVideos component', () => {
    const posts = [
        {
            "kind": "youtube#searchResult",
            "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
            "id": 
                "nmXMgqjQzls"
            ,
            "snippet": {
                "publishedAt": "2019-09-30T23:54:32Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Video Tour | Welcome to Wizeline Guadalajara",
                "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-30T23:54:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e69LZQ8KMVzNOm0RfQ1IjaUCbmw",
            "id": 
                 "HYyRZiwBWc8"
            ,
            "snippet": {
                "publishedAt": "2019-04-18T18:48:04Z",
                "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                "title": "Wizeline Guadalajara | Bringing Silicon Valley to Mexico",
                "description": "Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Wizeline",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-18T18:48:04Z"
            }
        }
      ]

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
