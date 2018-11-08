import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/AppHeader/Header";

import { PrivateRoute } from "../helpers/PrivateRoute";
import { history } from "../store";
import { HomePage } from "../components/Home";
import { AppRegister } from "../components/Authentication/Register";
import { AppLogin } from "../components/Authentication/Login";
import { AppResult } from "../components/Results/RoutComp";

const Routes = () => {
  console.log(history)
  return (
    <Router history={history}>
      <div>
        {history.location.pathname != "/login" ? <Header name="LPA" /> : ''}
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/register" component={AppRegister} />
        <Route path="/login" component={AppLogin} />
        <Route path="/results" component={AppResult} />
      </div>
    </Router>
  )
}

export default Routes