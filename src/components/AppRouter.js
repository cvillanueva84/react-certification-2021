import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
//import { HomeScreen } from '../components/HomeScreen';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
//import { Header } from '../pages/Header/Header';
import { HeaderNav } from './HeaderNav';
import { HomeView } from './HomeView';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <HeaderNav/>
                <Switch>
                    <Route exact path="/" component={HomeView} />

                    <Route exact path="/videodetails/:videoId&:categoria" component={VideoDetailsScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
