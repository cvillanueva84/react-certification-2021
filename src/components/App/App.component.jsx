import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.component';
import AuthProvider from '../../providers/Auth';
import VideoListProvider from '../../providers/VideoList/VideoList.provider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import GridLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import ScrollToTop from '../../utils/scrollToTop';

const VideoDetails = lazy(() => import('../VideoDetails/VideoDetails.component'));

const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #060b26;
`;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </VideoListProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
