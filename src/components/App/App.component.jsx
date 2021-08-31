import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import AppState from '../../context/State/state';
import VideoDetailsView from '../VideoDetailsView';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <AppState>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/favorites">
                <FavoritesPage />
              </Route>
              <Route exact path="/favorites/:id">
                <VideoDetailsView />
              </Route>

              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route exact path="/:id">
                <VideoDetailsView />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
