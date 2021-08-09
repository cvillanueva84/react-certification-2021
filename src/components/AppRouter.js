import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { HomeView } from './HomeView';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/videodetails" component={VideoDetailsScreen} />

                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
