import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import MainComp from "./MainComp";

import { history } from "../store";
import { AppRegister } from "../components/Authentication/Register";
import { AppLogin } from "../components/Authentication/Login";

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <MainComp />
        <Route path="/register" component={AppRegister} />
        <Route path="/login" component={AppLogin} />
      </div>
    </Router>
  )
}

export default Routes