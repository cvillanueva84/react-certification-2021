import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
//import { HomeScreen } from '../components/HomeScreen';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
//import { Header } from '../pages/Header/Header';
import { HomeView } from './HomeView';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/" component={HomeView} />

                    <Route exact path="/videodetails" component={VideoDetailsScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
