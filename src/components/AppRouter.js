import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//import { LoginScreen } from '../components/LoginScreen';
import { HomeScreen } from '../components/HomeScreen';
import { VideoDetailsScreen } from '../components/VideoDetailsScreen';
import { Header } from '../pages/Header/Header';


export const AppRouter = () => {
    return (
        <Router>
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />


                    <Route exact path="/videodetails" component={VideoDetailsScreen} />

                    <Redirect to="/" />
                </Switch>
            </>
        </Router>
    )
}
