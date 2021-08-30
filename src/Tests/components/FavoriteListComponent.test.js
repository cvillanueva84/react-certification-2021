import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import FavoritesList from '../../components/FavoritesList/FavoritesListComponent';
import Context from '../../providers/Theme/Theme.context';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { videosState } from '../mockData/videosList';
import AuthProvider from '../../providers/Auth';
import Private from '../../components/Private/PrivateComponent';


describe('Tests of the FavoriteListComponent', () => {
    const state = {
        isDark: true
    }
    const authenticated = true
    const wrapper = mount(
        <AuthProvider
            value={{authenticated}}
        >
            <Context.Provider
                value={{state}}
                >
                <VideoListContext.Provider
                    value={{
                        videosState
                    }}
                    >
                <MemoryRouter>
                    < FavoritesList/>
                </MemoryRouter>
                </VideoListContext.Provider>
            </Context.Provider>
        </AuthProvider>
    )
    test('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    

    test('should render a message if no videos are added to favorites', () => {
        if (videosState.length === 0) {
            const warningMsg = wrapper.find('h2')
            expect(warningMsg.length).toBe(1)
        }
    })
    
    test('should not show this component if the user is not authenticated', () => {
        const state = {
            isDark: true
        }
        const authenticated = false
        const wrapper = mount(
            <AuthProvider
                value={{authenticated}}
            >
                <Context.Provider
                    value={{state}}
                    >
                    <VideoListContext.Provider
                        value={{
                            videosState
                        }}
                        >
                    <MemoryRouter>
                        <Private>
                            < FavoritesList/>
                        </Private>
                    </MemoryRouter>
                    </VideoListContext.Provider>
                </Context.Provider>
            </AuthProvider>
        )
        const favoriteListComponent = wrapper.find('FavoriteListContainer')
        expect(favoriteListComponent.exists()).toBe(false)
    })
    
    test('should display the title of the video', () => {
        const title = wrapper.find('TitleSpan').at(0)
        expect(title.text()).toEqual(videosState.posts[1].snippet.title)
    })
    
    test('should show a custom message if the video does not have a description', () => {
        const description = wrapper.find('DescriptionSpan').at(0)
        if (description.text().length === '') {
            expect(description.text()).toBe('watch video...')
        } else {
            expect(description.text()).toBe(videosState.posts[1].snippet.description.slice(0, 100))
        }
    })
    
})


