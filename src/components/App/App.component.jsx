import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import HomeView from '../../pages/HomeView';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
//import SecretPage from '../../pages/Secret';


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
    <BrowserRouter>
      <AuthProvider>

          <Switch>

            
            <Route exact path="/">
              <Layout>
                <HomePage/>
              </Layout>
            </Route>

            <Route exact path="/login">
              <Layout>
                <LoginPage />
              </Layout>
            </Route>

            <Private exact path="/homeview">
              <HomeView />
            </Private>
            
            <Route path="*">
              <Layout>
                <NotFound />
              </Layout>
            </Route>

          </Switch>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
