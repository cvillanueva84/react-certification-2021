import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import FavoriteDetails from '../../components/FavoriteDetails/FavoriteDetailsComponent';
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
    
    
})
