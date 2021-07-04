import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
