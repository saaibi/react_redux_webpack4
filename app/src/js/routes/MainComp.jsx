import React from 'react'
import { Route } from "react-router-dom";

import Header from "../components/AppHeader/Header";

import { PrivateRoute } from "../helpers/PrivateRoute";
import { HomePage } from "../components/Home";
import { AppResult } from "../components/Results/RoutComp";

const isLoggedIn = localStorage.getItem('user') !== null;

const RouterComp = () => (
  <div>
    {isLoggedIn && <Header name="UNUM" />}
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute path="/results" component={AppResult} />
  </div>
);

export default RouterComp
