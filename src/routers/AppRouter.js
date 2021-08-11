import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalContext } from '../components/Context';
import { LoginView } from '../components/LoginView';
import { NotFound } from '../components/NotFound';
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
                    <PublicRoute>
                        <Route path="*" component={NotFound} />
                    </PublicRoute>

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
