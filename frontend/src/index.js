import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import store from "store";
import { Provider } from "react-redux";
import User from "views/UserProfile";
import TemplateScreen from "views/TemplateScreen"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

        <Route path="/login" component={User} exact />
        
        <Route path="/admin/template/:id" component={TemplateScreen} />

        {localStorage.getItem("response") ? (
          <Redirect from="/" to="/admin/dashboard" />
        ) : (
          <Redirect from="/" to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
