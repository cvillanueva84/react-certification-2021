import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { act } from 'react-test-renderer';
import { reducer } from '../../providers/VideoList/VideoList.reducer';

describe('tests of the VideoList reducer actions', () => {
    const initialState = {
        loading:false,
        posts: [],
        favoriteVideos: [],
        error: ''
    }

    test('initial state should be loading = false, posts = [] and error equals to an empty string', () => {
        const { result } = renderHook(() => useReducer(reducer, initialState));
        const [ state] = result.current;
        expect(state).toEqual(initialState)
    })
    
    test('Test of the FETCH_SUCCESS action', () => {

        const action = {
            type: 'FETCH_SUCCESS',
            payload: [{"kind":"youtube#searchResult","etag":"erqeM78PZDWIBe8qOGHGM2WdSE8","id":{"kind":"youtube#video","videoId":"nmXMgqjQzls"},"snippet":{"publishedAt":"2019-09-30T23:54:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-09-30T23:54:32Z"}}],
          };
          const state = reducer(initialState, action);
          expect(state).toEqual({
            loading:false,
            posts: [{"kind":"youtube#searchResult","etag":"erqeM78PZDWIBe8qOGHGM2WdSE8","id":{"kind":"youtube#video","videoId":"nmXMgqjQzls"},"snippet":{"publishedAt":"2019-09-30T23:54:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-09-30T23:54:32Z"}}],
            error: '',
            favoriteVideos: []
          });
    })

    test('Test of the FETCH_ERROR action', () => {
        const action = {
            type: 'FETCH_ERROR'
          };
        const state = reducer(initialState, action)
        expect(state).toEqual({
            loading: false,
            posts: [],
            favoriteVideos: [],
            error: 'Unable to fetch data!'
        })
    })

    test('Test of the ADD_TO_FAVORITES action', () => {
        const action = {
            type: 'ADD_TO_FAVORITES',
            payload: {
                "kind": "youtube#video",
                "etag": "TJsn_MhmnvgnXsO6vYt7tumHLqM",
                "id": "nmXMgqjQzls",
                "snippet": {
                    "publishedAt": "2019-09-30T23:54:32Z",
                    "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                    "title": "Video Tour | Welcome to Wizeline Guadalajara",
                    "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
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
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Wizeline",
                    "tags": [
                        "Mexican silicon valley",
                        "silicon valley",
                        "startup culture",
                        "technology",
                        "engineering culture"
                    ],
                    "categoryId": "28",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Video Tour | Welcome to Wizeline Guadalajara",
                        "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/"
                    }
                }
            }
        }

        const state = reducer(initialState, action)
        expect(state).toEqual({
            loading: false,
            favoriteVideos: [{
                "kind": "youtube#video",
                "etag": "TJsn_MhmnvgnXsO6vYt7tumHLqM",
                "id": "nmXMgqjQzls",
                "snippet": {
                    "publishedAt": "2019-09-30T23:54:32Z",
                    "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
                    "title": "Video Tour | Welcome to Wizeline Guadalajara",
                    "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
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
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Wizeline",
                    "tags": [
                        "Mexican silicon valley",
                        "silicon valley",
                        "startup culture",
                        "technology",
                        "engineering culture"
                    ],
                    "categoryId": "28",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Video Tour | Welcome to Wizeline Guadalajara",
                        "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/"
                    }
                }
            }],
            error: '',
            posts: []
        })
    })
    
    test('Test of the REMOVE_FROM_FAVORITES action', () => {
        const action = {
            type: 'REMOVE_FROM_FAVORITES',
            payload: 'nmXMgqjQzls'
        }
        const initialState = {
            loading:false,
            posts: [],
            favoriteVideos: [{"kind":"youtube#video","etag":"TJsn_MhmnvgnXsO6vYt7tumHLqM","id":"nmXMgqjQzls","snippet":{"publishedAt":"2019-09-30T23:54:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg","width":1280,"height":720}},"channelTitle":"Wizeline","tags":["Mexican silicon valley","silicon valley","startup culture","technology","engineering culture"],"categoryId":"28","liveBroadcastContent":"none","localized":{"title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/"}}}],
            error: ''
        }

        const state = reducer(initialState, action)
        expect(state).toEqual({
            loading:false,
            posts: [],
            favoriteVideos: [],
            error: ''
        })
    })
    
    
})
