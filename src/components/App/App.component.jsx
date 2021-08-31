import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeView from '../../pages/HomeView';
import VideoView from '../../pages/VideoView';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/videoview/:id">
          <VideoView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
