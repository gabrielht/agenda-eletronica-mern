import React from "react";
import { Route, Redirect } from "react-router";
import { isLogged } from "../utils/auth";

const PrivateRoute = (props) => (isLogged() ? <Route {...props}></Route> : <Redirect to="/login"></Redirect>);

export default PrivateRoute;
