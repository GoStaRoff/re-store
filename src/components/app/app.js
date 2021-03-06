import React from "react";
import { Route, Switch } from "react-router-dom";
import { CartPage, HomePage } from "../pages";
import Header from "../header";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
