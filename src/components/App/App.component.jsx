import React from 'react';
import { HomeView } from '../../pages/HomeView/HomeView.page'
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import AuthProvider from '../../providers/Auth';
//import HomePage from '../../pages/Home';
//import LoginPage from '../../pages/Login';
//import NotFound from '../../pages/NotFound';
//import Private from '../Private';
//import Layout from '../Layout';


function App() {

  return (

    <HomeView/>


    /*
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
    </BrowserRouter>*/
  );
  
}

export default App;
