import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { reducer } from '../../providers/VideoList/VideoList.reducer';

describe('tests of the VideoList reducer actions', () => {
    const initialState = {
        loading:false,
        posts: [],
        favoriteVideos: [],
        error: ''
    }

    test('initial state should be loading = false, posts = [], favoriteVideos = [] and error equals to an empty string', () => {
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
                "kind": "youtube#searchResult",
                "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nmXMgqjQzls"
                },
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
            }
        }

        const state = reducer(initialState, action)
        expect(state).toEqual({
            loading: false,
            favoriteVideos: [{
                "kind": "youtube#searchResult",
                "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nmXMgqjQzls"
                },
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
            favoriteVideos: [{
                "kind": "youtube#searchResult",
                "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nmXMgqjQzls"
                },
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
            }],
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
