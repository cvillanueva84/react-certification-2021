import React from 'react';
import { Switch, Route } from "react-router-dom";
import { HomeView } from '../components/HomeView';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';

export const DashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/videodetails" component={VideoDetailsScreen} />
        </Switch>
    )
}
