import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetailsView from '../../pages/VideoDetailsView';
import Layout from '../Layout';

function App() {
  const [searchTerm, setSearchTerm] = useState('Love of lesbian');

  return (
    <BrowserRouter>
      <Layout sST={setSearchTerm}>
        <Switch>
          <Route exact path="/">
            <HomePage sT={searchTerm} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/:id">
            <VideoDetailsView sT={searchTerm} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
