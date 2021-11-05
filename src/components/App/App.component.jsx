import React, { useLayoutEffect, useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import VideoDetails from '../VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Header from '../Header';
import Cards from '../Cards';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import GeneralContext from '../../state/GeneralContext';
import ThemeContext from '../../state/ThemeContext';

const defaultTheme = {
  color: 'black',
  backgroundColor: 'white',
  detailsColor: 'rgba(0, 0, 0, 0.54)',
  headerColor: '#1c5476',
};

const darkTheme = {
  color: 'white',
  backgroundColor: '#303030',
  detailsColor: 'rgba(255, 255, 255, 0.7)',
  headerColor: '#556cd6;',
};

function reducer(state) {
  if (!state.isDark) {
    return { theme: darkTheme, isDark: true };
  }
  return { theme: defaultTheme, isDark: false };
}

function App() {
  const [keyword, setKeyword] = useState('wizeline');
  const [state, dispatch] = useReducer(reducer, { theme: defaultTheme, isDark: false });

  const toggleTheme = () => {
    dispatch();
  };

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
    <div>
      <ThemeContext.Provider value={{ toggleTheme }}>
        <GeneralContext.Provider value={{ keyword, setKeyword }}>
          <ThemeProvider theme={state.theme}>
            <Header />
            <BrowserRouter>
              <AuthProvider>
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <Cards />
                    </Route>
                    <Private exact path="/secret">
                      <SecretPage />
                    </Private>
                    <Route path="/:videoId">
                      <VideoDetails />
                    </Route>
                    <Route exact path="/login">
                      <LoginPage />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                  <Fortune />
                </Layout>
              </AuthProvider>
            </BrowserRouter>
          </ThemeProvider>
        </GeneralContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
