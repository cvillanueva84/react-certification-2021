import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

import { GlobalStyle, themes } from '../../globalStyles';
import VideoPlayer from '../../pages/VideoPlayer';
import ThemeContext from '../Context/ThemeContext';
import VideoContext from '../Context/VideoContext';
import { FavoritesProvider } from '../../providers/Favorites/Favorites.provider';
import FavoriteDetailsPage from '../../pages/FavoriteDetails/FavoriteDetails.page';
import VideoFavoriteContext from '../Context/VideoFavorite';

function App() {
  const [theme, setTheme] = useState('light');
  const [video, setVideo] = useState({});
  const [videoFavorite, setVideoFavorite] = useState({});
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <FavoritesProvider>
              <Layout>
                <VideoFavoriteContext.Provider
                  value={{ videoFavorite, setVideoFavorite }}
                >
                  <VideoContext.Provider value={{ video, setVideo }}>
                    <ThemeContext.Provider value={{ theme, setTheme }}>
                      <Switch>
                        <Route exact path="/">
                          <HomePage />
                        </Route>
                        <Route path="/watch">
                          <VideoPlayer />
                        </Route>
                        <Route exact path="/login">
                          <LoginPage />
                        </Route>
                        <Private exact path="/favorites">
                          <FavoritesPage />
                        </Private>
                        <Private path="/favorites/">
                          <FavoriteDetailsPage />
                        </Private>
                        <Private exact path="/secret">
                          <SecretPage />
                        </Private>
                        <Route path="*">
                          <NotFound />
                        </Route>
                      </Switch>
                    </ThemeContext.Provider>
                  </VideoContext.Provider>
                </VideoFavoriteContext.Provider>
              </Layout>
            </FavoritesProvider>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
