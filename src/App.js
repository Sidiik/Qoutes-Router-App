import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Add from "./pages/AddQoute/Add";
import Details from "./pages/Details/Details";
import Header from "./pages/Header/Header";
import Qoutes from "./pages/Qoutes/Qoutes";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/qoutes" />
        </Route>
        <Route path="/qoutes" exact>
          <Qoutes />
        </Route>
        <Route path="/addQoutes">
          <Add />
        </Route>
        <Route path="/qoutes/:qouteID">
          <Details />
        </Route>
      </Switch>
    </>
  );
};

export default App;
