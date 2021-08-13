import React, { lazy, Suspense, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import AuthProvider from '../../providers/Auth';
import VideoListProvider from '../../providers/VideoList/VideoList.provider';
import HomePage from '../../pages/Home';
// import LoginModal from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import GridLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import ScrollToTop from '../../utils/scrollToTop';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { light, dark } from '../../providers/Theme/themes';
import Context from '../../providers/Theme/Theme.provider';
import { ThemeReducer } from '../../providers/Theme/Theme.reducer';
const VideoDetails = lazy(() => import('../VideoDetails/VideoDetails.component'));

const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #060b26;
`;

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    list-style: none;
  }
  a {
    color: ${({ theme }) => theme.text}
  }

  span {
    color: ${({ theme }) => theme.text}
  }

`;

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
                  <Route exact path="/video/:id">
                    <Suspense fallback={<GridLoader size={150} css={override} />}>
                      <VideoDetails />
                    </Suspense>
                  </Route>
                  {/* <Route exact path="/login">
                    <LoginModal />
                  </Route> */}
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route>
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
