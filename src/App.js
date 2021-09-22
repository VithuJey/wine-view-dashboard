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

const MainRoute = ({ Component, ...rest }) => {
  return (
    <MainLayout>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />

        <MainRoute exact path="/account" component={Account} />
        <MainRoute exact path="/wine/view" component={WineView} />
        <MainRoute exact path="/wine/add" component={WineAdd} />
        <MainRoute exact path="/wine/edit/:id" component={WineAdd} />
        <MainRoute exact path="/wine/view/:id" component={WineAdd} />
        <MainRoute exact path="/chart/:name" component={Chart} />
        <MainRoute exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
// three party libraries: https://ant.design/docs/react/recommendation
