import React, { lazy, Suspense, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GridLoader from 'react-spinners/ClipLoader';
import { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home/HomePage';
import NotFound from '../../pages/NotFound/NotFoundPage';
import AuthProvider from '../../providers/Auth';
import Context from '../../providers/Theme/Theme.context';
import { ThemeReducer } from '../../providers/Theme/Theme.reducer';
import { dark, light } from '../../providers/Theme/themes';
import VideoListProvider from '../../providers/VideoList/VideoList.provider';
import ScrollToTop from '../../utils/scrollToTop';
import FavoriteDetails from '../FavoriteDetails/FavoriteDetailsComponent';
import FavoritesList from '../FavoritesList/FavoritesListComponent';
import Layout from '../Layout';
import Navbar from '../Navbar/NavbarComponent';
import Private from '../Private/PrivateComponent';
import { GlobalStyles, override } from './AppComponent.styled';
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
