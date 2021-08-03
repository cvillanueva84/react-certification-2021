import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../../GlobalStyles';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import SearchPage from '../../pages/Search/Search.page';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
// import { random } from '../../utils/fns';

function App() {
  // useLayoutEffect(() => {
  //   const { body } = document;

  //   function rotateBackground() {
  //     const xPercent = random(100);
  //     const yPercent = random(100);
  //     body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
  //   }

  //   const intervalId = setInterval(rotateBackground, 3000);
  //   body.addEventListener('click', rotateBackground);

  //   return () => {
  //     clearInterval(intervalId);
  //     body.removeEventListener('click', rotateBackground);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/search/:query" component={SearchPage} />
            <Route path="/videoDetails/:query" component={VideoDetails} />
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
