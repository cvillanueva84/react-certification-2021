import React, { lazy, Suspense, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/NavbarComponent';
import AuthProvider from '../../providers/Auth';
import VideoListProvider from '../../providers/VideoList/VideoList.provider';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import GridLoader from 'react-spinners/ClipLoader';
import ScrollToTop from '../../utils/scrollToTop';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../providers/Theme/themes';
import Context from '../../providers/Theme/Theme.context';
import { ThemeReducer } from '../../providers/Theme/Theme.reducer';
import Private from '../Private/PrivateComponent';
import { override, GlobalStyles } from './AppComponent.styled';
import FavoritesList from '../FavoritesList/FavoritesListComponent';
import FavoriteDetails from '../FavoriteDetails/FavoriteDetailsComponent';
const VideoDetails = lazy(() => import('../VideoDetails/VideoDetailsComponent'));

function App() {
  const [state, dispatch] = useReducer(ThemeReducer, {
    isDark: false,
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <Context.Provider value={{ state, dispatch }}>
          <ThemeProvider theme={state.isDark ? light : dark}>
            <GlobalStyles />
            <VideoListProvider>
              <Layout>
                <Navbar />
                <ScrollToTop />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/video/:id">
                    <Suspense fallback={<GridLoader size={150} css={override} />}>
                      <VideoDetails />
                    </Suspense>
                  </Route>
                  <Private exact path="/favorite-videos">
                    <FavoritesList />
                  </Private>
                  <Private exact path="/favorite-video/:id">
                    <FavoriteDetails />
                  </Private>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Layout>
            </VideoListProvider>
          </ThemeProvider>
        </Context.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
