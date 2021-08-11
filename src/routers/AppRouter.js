import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GlobalContext } from '../components/Context';
import { LoginView } from '../components/LoginView';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { myStateReducer } = useContext(GlobalContext)

    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute 
                        exact path="/login" 
                        component={LoginView} 
                        isAuthenticated={myStateReducer.logged}
                    />

                    <PrivateRoute 
                        path="/" 
                        component={DashboardRoutes} 
                        isAuthenticated={myStateReducer.logged}
                    />

                </Switch>
            </>
        </Router>
    )
}
