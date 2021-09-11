import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Account from "../views/Account/Account";

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
      <Switch>
        <Route path="account" component={Account} />
      </Switch>
    </Route>
  );
}

export default Routes;
