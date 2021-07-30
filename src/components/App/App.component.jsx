import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from '../../pages/Header/Header';
import { HomeView } from '../../pages/HomeView/HomeView.page';
import { VideoDetails } from '../../pages/VideoDetails/VideoDetails'

//import AuthProvider from '../../providers/Auth';
//import HomePage from '../../pages/Home';
//import LoginPage from '../../pages/Login';
//import NotFound from '../../pages/NotFound';
//import Private from '../Private';
//import Layout from '../Layout';


function App() {

  return (

    <Router>
      <>
        <Header/>
        <Switch>
          <Route exact path ="/" component={HomeView}/>
          <Route exact path="/videoDetails/:videoId" component={VideoDetails}/>
          <Redirect to="/"/>
        </Switch>
      </>
    </Router>



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
