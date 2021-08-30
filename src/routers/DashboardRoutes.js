import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeView } from '../components/ui/HomeView';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { NotFound } from '../components/ui/NotFound';
import { FavoriteVideosView } from '../components/ui/FavoriteVideosView';
import { FavVideoDetailsScreen } from '../components/ui/FavVideoDetailsScreen';

export const DashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/videodetails" component={VideoDetailsScreen} />
            <Route exact path="/favorites" component={FavoriteVideosView} />
            <Route exact path="/videodetailsfavs" component={FavVideoDetailsScreen}/>
            <Route path="/*" component={NotFound}/>
            <Redirect to="/"/>
        </Switch>
    )
}
