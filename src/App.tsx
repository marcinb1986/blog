import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { LoginScreen } from "./screens/loginScreen/loginScreen";
import { MainScreen } from "./screens/mainScreen/main";

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/main">
        <MainScreen />
      </Route>
    </Switch>
  );
};
