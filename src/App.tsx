import React from "react";
import { Route } from "react-router-dom";

import { LoginScreen } from "./screens/loginScreen/loginScreen";
import { MainScreen } from "./screens/mainScreen/main";

export const App = () => {
  return (
    <div>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/main">
        <MainScreen />
      </Route>
    </div>
  );
};
