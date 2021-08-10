import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { HomeView } from './HomeView';
import { LoginView } from './LoginView';
import { NotFound } from './NotFound';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/login" component={LoginView} />

                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/videodetails" component={VideoDetailsScreen} />

                    <Route path="*" component={NotFound} />

                </Switch>
            </>
        </Router>
    )
}
