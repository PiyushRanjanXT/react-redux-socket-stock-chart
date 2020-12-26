import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/menu/";
import store from "./store";
import Dashboard from "./modules/dashboard";
import LiveChart from "./modules/live-chart";

const App = () => (
  <Provider store={store}>
    <Router>
      <Menu></Menu>
      <div className="container">
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/chart" component={LiveChart} />
      </div>
    </Router>
  </Provider>
);

export default App;
