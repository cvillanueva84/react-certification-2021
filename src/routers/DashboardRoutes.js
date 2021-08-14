import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeView } from '../components/HomeView';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { NotFound } from '../components/NotFound';
import { FavoriteVideosView } from '../components/FavoriteVideosView';

export const DashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/videodetails" component={VideoDetailsScreen} />
            <Route exact path="/favorites" component={FavoriteVideosView} />
            <Route path="/*" component={NotFound}/>
            <Redirect to="/"/>
        </Switch>
    )
}
