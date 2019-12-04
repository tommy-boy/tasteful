import React, { Suspense, lazy, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes";
import { createStore } from "./Store/Store";
import "./App.css";

// const Registration = lazy(() => import("./routes/Registration"));
// const About = lazy(() => import("./routes/About"));

const RatingsStore = createStore([]);

export const useRatings = RatingsStore.useStore;

const requireAuth = (nextState, replace) => {
  console.log("auth");
  //if (!loggedIn)
  replace({ nextPathname: nextState.location.pathname }, "/login");
};

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <RatingsStore.Provider>
      <Router>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          {indexRoutes.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
              // isPrivate
            />
          ))}
        </Switch>
        {/* </Suspense>       */}
      </Router>
    </RatingsStore.Provider>
  );
};

export default App;
