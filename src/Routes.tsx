import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const HomeContainer = lazy(() => import("./containers/HomeContainer"));

const Routes: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/home" component={HomeContainer} />
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
