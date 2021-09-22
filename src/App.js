import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.less";
import MainLayout from "./views/MainLayout/MainLayout";
import Dashboard from "./views/Dashboard/Dashboard";
import WineView from "./views/WineView/WineView";
import WineAdd from "./views/WineAdd/WineAdd";
import Account from "./views/Account/Account";
import Chart from "./views/Chart/Chart";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

// @ts-ignore
// function PrivateRoute({ Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         localStorage.getItem("token") && localStorage.getItem("user") ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <MainLayout>
          <Route exact path="/account" component={Account} />
          <Route exact path="/wine/view" component={WineView} />
          <Route exact path="/wine/add" component={WineAdd} />
          <Route exact path="/wine/edit/:id" component={WineAdd} />
          <Route exact path="/wine/view/:id" component={WineAdd} />
          <Route exact path="/chart/:name" component={Chart} />
          <Route exact path="/" component={Dashboard} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
// three party libraries: https://ant.design/docs/react/recommendation
