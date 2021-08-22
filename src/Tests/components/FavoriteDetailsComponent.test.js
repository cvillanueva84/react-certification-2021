import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import FavoriteDetails from '../../components/FavoriteDetails/FavoriteDetailsComponent';
import Private from '../../components/Private/PrivateComponent';
import AuthProvider from '../../providers/Auth';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import { videosState } from '../mockData/videosList';

describe('Tests of the FavoriteDetailsComponent', () => {
    const authenticated = true
    const removeFromFavorites = jest.fn()
    const wrapper = mount(
    <AuthProvider
        value={{
            authenticated
        }}
    >
        <VideoListContext.Provider
            value={{
                videosState,
                removeFromFavorites
            }}
        >
            <MemoryRouter
                initialEntries={['/favorite-video/HYyRZiwBWc8']}
            >
            <Route path="/favorite-video/:id">
                <FavoriteDetails />
            </Route>
            </MemoryRouter>
        </VideoListContext.Provider>
    </AuthProvider>
    )

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should not show this component if the user is not authenticated', () => {
        const authenticated = false
        const removeFromFavorites = jest.fn()
        const wrapper = mount(
        <AuthProvider
            value={{
                authenticated
            }}
        >
            <VideoListContext.Provider
                value={{
                    videosState,
                    removeFromFavorites
                }}
            >
                <MemoryRouter
                    initialEntries={['/favorite-video/HYyRZiwBWc8']}
                >
                    <Private>    
                        <Route path="/favorite-video/:id">
                            <FavoriteDetails />
                        </Route>
                    </Private>
                </MemoryRouter>
            </VideoListContext.Provider>
        </AuthProvider>
        )
        const FavoriteDetailsComponent = wrapper.find('VideoDetailsContainer')
        expect(FavoriteDetailsComponent.exists()).toBe(false)
    })
    
})
