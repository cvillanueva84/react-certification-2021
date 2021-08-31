import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import FavoriteVideosViewPage from '../../pages/FavoriteVideosView';
import FavoriteVideoDetailsView from '../../pages/FavoriteVideoDetailsView';
import Private from '../Private';
import NotFound from '../../pages/NotFound';
import MainVideoDetailsView from '../../pages/MainVideoDetailsView';
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
  const { store } = useStoreContext();
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
            <MainVideoDetailsView />
          </Route>
          <Private exact path="/favorites">
            <FavoriteVideosViewPage />
          </Private>
          <Private path="/favorites/:id">
            <FavoriteVideoDetailsView />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
