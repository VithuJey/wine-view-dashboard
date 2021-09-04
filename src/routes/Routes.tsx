import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// @ts-ignore
function PrivateRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") && localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function Routes() {
  return (
    <Route>
      <Switch>{/* <PrivateRoute /> */}</Switch>
    </Route>
  );
}

export default Routes;
