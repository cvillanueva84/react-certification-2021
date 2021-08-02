import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

import { GlobalStyle, themes } from '../../globalStyles';
import VideoPlayer from '../../pages/VideoPlayer';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage theme={theme} setTheme={setTheme} />
                </Route>
                <Route path="/watch">
                  <VideoPlayer theme={theme} setTheme={setTheme} />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
