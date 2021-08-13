import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeView } from '../components/HomeView';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { NotFound } from '../components/NotFound';

export const DashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/videodetails" component={VideoDetailsScreen} />
            <Route path="/*" component={NotFound}/>
            <Redirect to="/"/>
        </Switch>
    )
}
