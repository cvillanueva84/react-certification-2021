import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Layout from '../Layout';
import Navbar from '../../components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Layout>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
