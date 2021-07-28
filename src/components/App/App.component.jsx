import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from '../../pages/HomeView';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </Router>
  );
};

export default App;
