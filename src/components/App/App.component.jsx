import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import FavoriteVideosViewPage from '../../pages/FavoriteVideosView';
import NotFound from '../../pages/NotFound';
import VideoDetailsView from '../../pages/VideoDetailsView';
import Layout from '../Layout';
import { useStoreContext } from '../../state/Store.provider';
import GlobalStyle from './App.styles';

const lightTheme = {
  body: '#fff',
  a: '#000',
  cardBodyHover: '#f8f7f7',
};
const darkTheme = {
  body: 'rgba(33, 33, 33, 0.98)',
  a: '#fff',
  cardBodyHover: '#353434',
};

function App() {
  const [store] = useStoreContext();
  const { theme } = store;
  return (
    <HashRouter>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/video/:id">
            <VideoDetailsView />
          </Route>
          <Route path="/favorites">
            <FavoriteVideosViewPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
